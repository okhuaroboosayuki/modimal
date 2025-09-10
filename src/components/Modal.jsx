import {
  cloneElement,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";
// import { setDocumentOverFlow } from "../utils/setDocOverflow";

// 1. create modal context
const ModalContext = createContext();

// 2. wrap child(ren) with the context provider
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => {
    // setDocumentOverFlow(false);
    setOpenName("");
  };

  return (
    <ModalContext.Provider value={{ close, setOpenName, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

// 3a. consume context and pass funtion to cloned child element that will have either the click or hover ability to open a modal window
function Open({ opens: windowName, children, clickable = true }) {
  const { setOpenName, openName, close } = useContext(ModalContext);

  const openWindow = useCallback(() => {
    if (openName === windowName) {
      close();
      return;
    }

    setOpenName(windowName);
    // setDocumentOverFlow(true);
  }, [close, openName, setOpenName, windowName]);

  // clone the child element and add either onClick or onMouseEnter and onFocus event handler to open the modal window. useMemo used here to avoid unnecessary re-renders
  const clonedEl = useMemo(
    () =>
      cloneElement(children, {
        [clickable ? "onClick" : "onMouseEnter"]: openWindow,
        tabIndex: clickable ? undefined : 0,
        onFocus: clickable ? undefined : openWindow,
        [openName === "search" && "windowName"]: openName,
      }),
    [children, clickable, openName, openWindow],
  );

  return clonedEl;
}

// 3b. consume context and render modal window if the name matches the openName in context state
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const container = document.getElementById("header");

  const clonedEl = useMemo(
    () =>
      cloneElement(children, {
        [name === "search"
          ? "onSearch"
          : name === "mobile-menu"
            ? "onCloseMenu"
            : null]: close,
      }),
    [children, close, name],
  );

  if (name !== openName) return null;

  return createPortal(
    <div className="modal">
      <>{clonedEl}</>
    </div>,

    container,
  );
}

// 4. attach Open and Window as properties of Modal component to access their functionality
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
