import { useLocation } from "react-router-dom";
import { ProgressLink } from "../ProgressLinks";

function CartDetailsHeader() {
  const location = useLocation();

  const from = location.state?.from;

  return (
    <section className="flex w-full items-center justify-between gap-4 capitalize max-[360px]:text-xs">
      <h1 className="text-2xl font-semibold sm:text-[32px]">your cart</h1>

      <ProgressLink
        to={from ? from : "/shop-all"}
        className="text-primary-600 hover:text-primary cursor-pointer hover:underline"
      >
        continue shopping
      </ProgressLink>
    </section>
  );
}

export default CartDetailsHeader;
