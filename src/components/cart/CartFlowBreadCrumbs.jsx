import { useLocation } from "react-router-dom";
import { ProgressLink } from "../ProgressLinks";

const CRUMBS = [
  { label: "Cart", path: "/cart" },
  { label: "Info", path: "/cart/information" },
  { label: "Shipping", path: "/cart/shipping" },
  { label: "Payment", path: "/cart/payment" },
];

function CartFlowBreadCrumbs() {
  const { pathname } = useLocation();

  return (
    <nav
      className="flex items-start gap-4 text-xs capitalize sm:text-base"
      aria-label="Checkout flow"
    >
      {CRUMBS.map((crumb, i) => {
        const isActive = pathname === crumb.path;

        return (
          <div className="[&>a]:text-primary flex gap-4" key={crumb.path}>
            {isActive ? (
              <span>{crumb.label}</span>
            ) : (
              <ProgressLink to={crumb.path} className={"hover:text-gray40"}>
                {crumb.label}
              </ProgressLink>
            )}

            {i < CRUMBS.length - 1 && (
              <span className="text-gray60 select-none">/</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default CartFlowBreadCrumbs;
