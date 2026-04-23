import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { formatCurrency } from "../../utils/numberFormatter";
import CartQuantityControl from "./CartQuantityControl";
import ItemImage from "../../components/cart/ItemImage";
import ItemDetails from "../../components/cart/ItemDetails";
import CloseButton from "../../components/cart/CloseButton";
import { useEffect, useState } from "react";

function CartItem({ item, variant, closeModal }) {
  const [isWidthMedium, setIsWidthMedium] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsWidthMedium(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  return (
    <section className="relative flex h-[160px] w-full items-start justify-between">
      <div className="flex w-full items-start">
        <ItemImage item={item} variant={variant} closeModal={closeModal} />

        <ItemDetails
          item={item}
          variant={variant}
          isWidthMedium={isWidthMedium}
          closeModal={closeModal}
        />
      </div>

      <div
        className={`${isWidthMedium ? "w-fit" : "w-full md:max-w-[900px]"} flex h-full items-start justify-between gap-15 xl:gap-36`}
      >
        <CloseButton
          item={item}
          variant={variant}
          isWidthMedium={isWidthMedium}
        />

        <div className="flex w-full items-center justify-end gap-22 lg:gap-35 xl:gap-40">
          <span
            className={`${variant === "page" ? "hidden min-[900px]:inline-block" : "hidden"} self-start font-semibold`}
          >
            {formatCurrency(item.products.price, 0)}
          </span>

          {variant === "page" && !isWidthMedium ? (
            <CartQuantityControl item={item} isWidthMedium={isWidthMedium} />
          ) : null}

          <span
            className={`${variant === "page" ? "hidden min-[900px]:inline-block" : "hidden"} self-start font-semibold`}
          >
            {formatCurrency(item.products.price * item.quantity, 0)}
          </span>
        </div>
      </div>
    </section>
  );
}

export default CartItem;
