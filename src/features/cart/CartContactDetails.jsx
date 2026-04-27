import { ProgressLink } from "../../components/ProgressLinks";
import { useUser } from "../auth/useUser";
import CartEmailField from "./CartEmailField";

function CartContactDetails() {
  const { isAuthenticated } = useUser();

  return (
    <section className="flex w-full flex-col items-start gap-2">
      <div className="flex w-full items-start justify-between gap-4">
        <span>contact</span>

        {!isAuthenticated && (
          <div className="flex gap-1.5">
            <span>Have an account?</span>

            <ProgressLink
              to={"/login"}
              className={"text-primary-600 hover:underline"}
            >
              log in
            </ProgressLink>
          </div>
        )}
      </div>

      <CartEmailField />
    </section>
  );
}

export default CartContactDetails;
