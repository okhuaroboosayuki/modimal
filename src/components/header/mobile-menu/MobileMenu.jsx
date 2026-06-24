import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import { categoryList, sustainabilityList, trendingList } from "../subNavTags";
import { useUser } from "../../../features/auth/useUser";
import AuthButtonContainer from "../AuthButtonContainer";

function MobileMenu({ ref, closemodal }) {
  const location = useLocation();
  const { isAuthenticated } = useUser();
  const [isRecoveringPassword, setIsRecoveringPassword] = useState(false);

  useEffect(() => {
    if (location.pathname === "/update-password") {
      setIsRecoveringPassword(true);
    } else {
      setIsRecoveringPassword(false);
    }
  }, [location.pathname]);

  const isActive = isAuthenticated && !isRecoveringPassword;

  return (
    <nav
      className="h-screen w-full overflow-y-scroll! bg-white px-5 py-10 md:px-13 lg:px-5"
      ref={ref}
    >
      <section className="flex h-full flex-col items-start justify-start gap-[68px] text-sm capitalize">
        <div className="flex w-full flex-col items-start gap-8">
          <MenuItem content={categoryList} onCloseModal={closemodal} />

          <MenuItem content={trendingList} onCloseModal={closemodal} />

          <MenuItem content={sustainabilityList} onCloseModal={closemodal} />

          <MenuItem heading={"modiweek"} onCloseModal={closemodal} />

          <MenuItem heading={"plus size"} onCloseModal={closemodal} />
        </div>

        <AuthButtonContainer
          closemodal={closemodal}
          ref={ref}
          isActive={isActive}
          isMobileMenu={true}
        />
      </section>
    </nav>
  );
}

export default MobileMenu;
