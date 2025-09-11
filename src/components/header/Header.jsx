import { IoMdSearch } from "react-icons/io";
import { RiHeartLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import UserIcon from "../icons/UserIcon";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";
import Logo from "../icons/Logo";
import NavLists from "./NavLists";
import Modal from "../Modal";
import SearchContainer from "./SearchContainer";

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

        <nav
          className="relative flex w-full items-center justify-between px-4 py-6 lg:justify-around"
          id="nav-container"
        >
          <ul className="flex items-center justify-center gap-3 sm:gap-6 md:hidden">
            <li className="icon">
              <MdMenu width={24} height={24} className="cursor-pointer" />
            </li>

            <SearchContainer window={"mobile-search"} />
          </ul>

          <div>
            <Logo className={"w-[150px] lg:w-full"} />
          </div>

          <NavLists />

          <ul className="flex items-center justify-center gap-3 sm:gap-6">
            <SearchContainer
              customStyle={"hidden md:block"}
              window={"search"}
            />

            <li className="icon hidden md:block">
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
