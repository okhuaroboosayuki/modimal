import { Outlet } from "react-router-dom";
import CartPageHeader from "./CartPageHeader";

function CartPageLayout() {
  return (
    <div className="flex h-screen w-full flex-col items-center px-4 pt-8 sm:px-8 lg:px-12 xl:px-24">
      <CartPageHeader />

      <main className="mt-[75px] flex w-full items-center justify-center text-sm sm:text-lg">
        <Outlet />
      </main>
    </div>
  );
}

export default CartPageLayout;
