import { MdMenu } from "react-icons/md";
import { RiCloseFill } from "react-icons/ri";

function MobileMenuIcon({ windowname, onClick }) {
  const isWindowNameMobileMenu = windowname === "mobile-menu";

  return (
    <li className={`icon cursor-pointer`} onClick={onClick}>
      {isWindowNameMobileMenu ? <RiCloseFill /> : <MdMenu />}
    </li>
  );
}

export default MobileMenuIcon;
