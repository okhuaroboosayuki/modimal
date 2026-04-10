import { useNavigate } from "react-router-dom";
import Button from "../../Button";

function EmptyCart({ closeModal }) {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-[72px]">
      <div className="flex flex-col items-center gap-6 text-center">
        <h6 className="w-full font-bold">your shopping bag is empty</h6>

        <p className="w-[232px] text-sm">
          discover modimal and add products to your bag
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <Button
          className="bg-primary-600 hover:text-primary-600 text-white hover:bg-white"
          clickHandler={() => {
            navigate("/shop-all");
            closeModal();
          }}
        >
          collection
        </Button>

        <Button
          className="bg-primary-600 hover:text-primary-600 text-white hover:bg-white"
          clickHandler={() => {
            navigate("/new-in");
            closeModal();
          }}
        >
          new in
        </Button>

        <Button
          className="bg-primary-600 hover:text-primary-600 text-white hover:bg-white"
          clickHandler={() => {
            navigate("/best-seller");
            closeModal();
          }}
        >
          bestsellers
        </Button>
      </div>
    </section>
  );
}

export default EmptyCart;
