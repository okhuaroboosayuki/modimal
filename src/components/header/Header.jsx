import { RiHeartLine } from "react-icons/ri";
import Modal from "../Modal";
import MobileMenuContainer from "./mobile-menu/MobileMenuContainer";
import SearchContainer from "./search/SearchContainer";
import NavLists from "./nav/NavLists";
import Logo from "./../icons/Logo";
import UserIcon from "./../icons/UserIcon";
import ShoppingBagIcon from "./../icons/ShoppingBagIcon";

function Header() {
  return (
    <Modal>
      <header
        className="flex w-full flex-col items-center justify-center"
        id="header"
      >
        <div className="bg-primary-600 w-full p-1 text-center text-xs leading-normal text-white">
          Enjoy Free Shipping On All Orders
        </div>

        <nav className="relative flex w-full items-center justify-between px-4 py-6 lg:justify-around">
          <ul className="flex items-center justify-center gap-3 sm:gap-6 lg:hidden">
            <MobileMenuContainer />

            <SearchContainer window={"mobile-search"} />
          </ul>

          <div>
            <Logo className={"w-[150px] lg:w-full"} />
          </div>

          <NavLists />

          <ul className="flex items-center justify-center gap-3 sm:gap-6">
            <SearchContainer
              customStyle={"hidden lg:block"}
              window={"search"}
            />

            <li className="icon hidden lg:block">
              <UserIcon className="cursor-pointer" />
            </li>

            <li className="icon">
              <RiHeartLine className="cursor-pointer" />
            </li>

            <li className="icon">
              <ShoppingBagIcon className="cursor-pointer" />
            </li>
          </ul>
        </nav>
      </header>
    </Modal>
  );
}

export default Header;
