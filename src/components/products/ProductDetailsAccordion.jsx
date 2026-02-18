import { BiMinus, BiPlus } from "react-icons/bi";

function ProductDetailsAccordion({
  accordionTitle,
  details,
  clickable = true,
  tags,
  isOpen,
  onToggle,
}) {
  return (
    <>
      {clickable ? (
        <div className="bg-primary-25 border-grayCB flex w-full flex-col items-start gap-2 border lg:w-[600px]">
          <div
            className="border-b-grayCB z-20 flex w-full cursor-pointer border-b p-6"
            onClick={onToggle}
          >
            <h5
              className={`w-full text-xl ${isOpen ? "text-primary font-bold" : "font-semibold text-black"} transition-500-in-out capitalize`}
            >
              {accordionTitle}
            </h5>

            <span className="icon">
              {isOpen ? <BiMinus fill="#748c70" /> : <BiPlus />}
            </span>
          </div>

          <p
            className={`${!isOpen ? "-mt-2.5 h-0 opacity-0" : "p-6 opacity-100"} transition-500-in-out`}
          >
            {details}
          </p>
        </div>
      ) : (
        <div className="bg-primary-25 border-grayCB flex w-full flex-col items-start gap-2 border px-6 lg:w-[600px]">
          <div className="border-b-grayCB w-full border-b py-6">
            <h5 className="w-full text-xl capitalize">{accordionTitle}</h5>
          </div>

          <div className="flex flex-col gap-6 pt-4 pb-6">
            <p>{details}</p>

            <div className="flex w-full flex-wrap gap-4">
              {tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white px-2 py-1.5 text-center text-sm capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetailsAccordion;
