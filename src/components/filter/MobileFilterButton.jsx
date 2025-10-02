import { MdOutlineTune } from "react-icons/md";

function MobileFilterButton({ onClick }) {
  return (
    <section
      className="flex items-center justify-center gap-1 lg:hidden"
      onClick={onClick}
    >
      <span className="icon">
        <MdOutlineTune />
      </span>

      <span>Filter</span>
    </section>
  );
}

export default MobileFilterButton;
