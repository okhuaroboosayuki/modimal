import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-between">
      <Header />

      <main className="flex w-full items-center justify-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
