import { useNavigate } from "react-router-dom";
import { ProgressLink } from "../ProgressLinks";

function CartDetailsHeader() {
  const navigate = useNavigate();

  return (
    <section className="flex w-full items-center justify-between gap-4 capitalize max-[360px]:text-xs">
      <div className="flex items-center gap-5 sm:gap-13">
        <span
          className="text-primary-600 hover:text-primary cursor-pointer hover:underline"
          onClick={() => navigate(-1)}
          tabIndex={0}
          aria-label="Go back to the previous page"
        >
          back
        </span>

        <h1 className="text-2xl font-semibold sm:text-[32px]">your cart</h1>
      </div>

      <ProgressLink
        to={"/shop-all"}
        className="text-primary-600 hover:text-primary cursor-pointer hover:underline"
      >
        continue shopping
      </ProgressLink>
    </section>
  );
}

export default CartDetailsHeader;
