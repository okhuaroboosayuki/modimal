function CartDetailsSummaryRow({ label, value }) {
  return (
    <div className="flex w-full items-center justify-between capitalize">
      <span className="w-full">{label}</span>
      <span className="w-full text-end md:text-start">{value}</span>
    </div>
  );
}

export default CartDetailsSummaryRow;
