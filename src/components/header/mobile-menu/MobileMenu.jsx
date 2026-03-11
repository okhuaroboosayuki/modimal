import MenuItem from "./MenuItem";
import { categoryList, sustainabilityList, trendingList } from "../subNavTags";
import AuthButtonGroup from "../AuthButtonGroup";

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

          <MenuItem heading={"modiweek"} onCloseModal={closeModal} />

          <MenuItem heading={"plus size"} onCloseModal={closeModal} />
        </div>

        <AuthButtonGroup closeModal={closeModal} />
      </section>
    </nav>
  );
}

export default MobileMenu;
