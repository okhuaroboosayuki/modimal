import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearSearchQuerySate } from "../features/search/searchSlice";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import Header from "./header/Header";
import Footer from "./Footer";
import ConnectionStatusBanner from "./ConnectionStatusBanner";
import BackToTop from "./homepage/BackToTop";

function AppLayout() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isOnline = useOnlineStatus();

  useEffect(() => {
    if (location.pathname !== "/search") {
      dispatch(clearSearchQuerySate());
    }
  }, [location.pathname, dispatch]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-between">
      <Header />

      <main className="flex w-full items-center justify-center">
        {isOnline ? <Outlet /> : <ConnectionStatusBanner />}
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default AppLayout;
