import {
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

// 1. create modal context
const ModalContext = createContext();

// 2. wrap child(ren) with the context provider
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => {
    setOpenName("");
  };

  return (
    <ModalContext.Provider value={{ close, setOpenName, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

// 3a. consume context and pass funtion to cloned child element that will have either the click or hover ability to open a modal window
function Open({ opens: windowName, children }) {
  const { setOpenName, openName, close } = useContext(ModalContext);

  const openWindow = useCallback(() => {
    if (openName === windowName) {
      close();
      return;
    }

    setOpenName(windowName);
  }, [close, openName, setOpenName, windowName]);

  // clone the child element and add either onClick or onMouseEnter and onFocus event handler to open the modal window. useMemo used here to avoid unnecessary re-renders
  const clonedEl = useMemo(
    () =>
      cloneElement(children, {
        onClick: openWindow,
        tabIndex: 0,
        ...(openName === "search" ||
        openName === "mobile-search" ||
        openName === "mobile-menu"
          ? { windowName: openName }
          : {}),
      }),
    [children, openName, openWindow],
  );

  return clonedEl;
}

// 3b. consume context and render modal window if the name matches the openName in context state
function Window({ children, name }) {
  const ref = useRef();
  const { openName, close } = useContext(ModalContext);

  const container = document.getElementById("header");

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [close]);

  const clonedEl = useMemo(
    () =>
      cloneElement(children, {
        [name === "search" || name === "mobile-search"
          ? "onSearch"
          : name === "mobile-menu"
            ? "onCloseMenu"
            : null]: close,
        ref: ref,
      }),
    [children, close, name],
  );

  if (name !== openName) return null;

  return createPortal(
    <div className="modal" role="dialog" aria-label={`${name} Modal`}>
      <>{clonedEl}</>
    </div>,

    container,
  );
}

// 4. attach Open and Window as properties of Modal component to access their functionality
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
