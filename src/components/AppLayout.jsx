import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearSearchQuerySate } from "../features/search/searchSlice";
import Header from "./header/Header";
import Footer from "./Footer";

function AppLayout() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname !== "/search") {
      dispatch(clearSearchQuerySate());
    }
  }, [location.pathname, dispatch]);

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
