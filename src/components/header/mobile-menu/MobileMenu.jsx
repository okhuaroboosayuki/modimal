import MenuItem from "./MenuItem";
import { categoryList, sustainabilityList, trendingList } from "../subNavTags";
import MobileAuthLink from "./MobileAuthLink";

function MobileMenu({ ref, closeModal }) {
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

          <MenuItem heading={"modiweek"} />

          <MenuItem heading={"plus size"} />
        </div>

        <div className="text-primary-600 border-t-grayCB flex w-full flex-row items-center justify-center gap-4 border-t pt-[14.48px] pb-14 leading-6 capitalize max-[390px]:flex-col max-md:justify-between">
          <MobileAuthLink text={"log in"} link={"/login"} />

          <MobileAuthLink
            text={"create account"}
            link={"/signup"}
            hasIcon={false}
          />
        </div>
      </section>
    </nav>
  );
}

export default MobileMenu;
