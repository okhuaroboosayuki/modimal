import { MdMenu } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";

function MobileMenuIcon({ windowName, onClick }) {
  const isWindowNameMobileMenu = windowName === "mobile-menu";

  return (
    <li className={`icon cursor-pointer`} onClick={onClick}>
      {isWindowNameMobileMenu ? <RiCloseFill /> : <MdMenu />}
    </li>
  );
}

export default MobileMenuIcon;
