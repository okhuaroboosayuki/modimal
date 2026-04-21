function CartDetailsTableLabel() {
  return (
    <section className="flex w-full items-center justify-between pb-6 capitalize">
      <span>order summary</span>

      <div className="hidden items-center justify-end gap-16 min-[900px]:flex lg:gap-30 xl:gap-36.5">
        <span>item price</span>
        <span>quantity</span>
        <span>total cost</span>
      </div>
    </section>
  );
}

export default CartDetailsTableLabel;
