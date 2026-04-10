import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import Button from "../../../components/Button";

function CTAButton({
  isOutOfStock,
  onIncrease,
  onDecrease,
  isInCart,
  quantity,
  stockQuantity,
}) {
  return (
    <>
      {!isInCart ? (
        <Button
          className={`${isOutOfStock ? "bg-gray86 cursor-not-allowed!" : "bg-primary-600"} w-full py-3 text-base text-white capitalize`}
          isDisabled={isOutOfStock}
        >
          {isOutOfStock ? "out of stock" : "add to cart"}
        </Button>
      ) : (
        <div className="flex w-full items-center justify-between gap-4">
          <span
            className="bg-primary-600 transition-500-in-out w-[50px] cursor-pointer border p-4 text-sm text-white capitalize max-sm:p-3"
            onClick={onDecrease}
          >
            <HiOutlineMinus />
          </span>

          <span className="border-b-neutral-black w-[50px] border-b-2 py-2 text-center text-lg text-black">
            {quantity}
          </span>

          <span
            className={`${quantity === stockQuantity ? "bg-gray86 cursor-not-allowed text-white" : "bg-primary-600 cursor-pointer"} transition-500-in-out w-[50px] border p-4 text-sm text-white capitalize max-sm:p-3`}
            onClick={onIncrease}
            aria-disabled={quantity === stockQuantity}
          >
            <HiOutlinePlus />
          </span>
        </div>
      )}
    </>
  );
}

export default CTAButton;
