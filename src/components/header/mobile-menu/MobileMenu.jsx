import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import { categoryList, sustainabilityList, trendingList } from "../subNavTags";
import { useUser } from "../../../features/auth/useUser";
import AuthButtonContainer from "../AuthButtonContainer";

function MobileMenu({ ref, closeModal }) {
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
          <MenuItem content={categoryList} onCloseModal={closeModal} />

          <MenuItem content={trendingList} onCloseModal={closeModal} />

          <MenuItem content={sustainabilityList} onCloseModal={closeModal} />

          <MenuItem heading={"modiweek"} onCloseModal={closeModal} />

          <MenuItem heading={"plus size"} onCloseModal={closeModal} />
        </div>

        <AuthButtonContainer
          closeModal={closeModal}
          ref={ref}
          isActive={isActive}
          isMobileMenu={true}
        />
      </section>
    </nav>
  );
}

export default MobileMenu;
