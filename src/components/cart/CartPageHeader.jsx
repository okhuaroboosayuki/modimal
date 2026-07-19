import Logo from "../../assets/icons/Logo";
import { ProgressLink } from "../ProgressLinks";

function CartPageHeader() {
  return (
    <header className="w-full bg-white">
      <ProgressLink to={"/"}>
        <Logo />
      </ProgressLink>
    </header>
  );
}

export default CartPageHeader;
