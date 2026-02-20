import { RiHeartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import Modal from "../../features/modal/Modal";
import MobileMenuContainer from "./mobile-menu/MobileMenuContainer";
import SearchContainer from "./search/SearchContainer";
import NavLists from "./nav/NavLists";
import Logo from "./../icons/Logo";
import UserIcon from "./../icons/UserIcon";
import ShoppingBagIcon from "./../icons/ShoppingBagIcon";
import { ProgressLink } from "../ProgressLinks";

function Header() {
  const { isModalOpen } = useSelector((store) => store.modalOpen);

  return (
    <Modal>
      <header
        className={`flex ${isModalOpen ? "fixed" : "relative"} z-50 w-full flex-col items-center justify-center bg-white`}
        id="header"
      >
        <div className="bg-primary-600 w-full p-1 text-center text-xs leading-normal text-white">
          Enjoy Free Shipping On All Orders
        </div>

        <nav className="constant-padding relative flex w-full items-center justify-between py-6">
          <ul className="flex items-center justify-center gap-3 sm:gap-6 lg:hidden">
            <MobileMenuContainer />

            <SearchContainer window={"mobile-search"} />
          </ul>

          <ProgressLink to={"/"}>
            <Logo className={"w-[150px] lg:w-full"} />
          </ProgressLink>

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
