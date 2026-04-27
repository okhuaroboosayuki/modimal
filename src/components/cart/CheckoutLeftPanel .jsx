import { Outlet } from "react-router-dom";
import CartFlowBreadCrumbs from "./CartFlowBreadCrumbs";
import CartPageHeader from "./CartPageHeader";

function CheckoutLeftPanel() {
  return (
    <div className="order-2 flex w-full flex-col items-start justify-start gap-8 px-5 sm:px-8 lg:order-1 lg:px-12 lg:pt-8 xl:px-24">
      <CartPageHeader />

      <CartFlowBreadCrumbs />

      <section className="absolute left-0 flex w-full flex-col items-start justify-between px-5 py-5 text-sm capitalize max-lg:top-[100%] sm:text-lg lg:relative">
        <Outlet />
      </section>
    </div>
  );
}

export default CheckoutLeftPanel;
