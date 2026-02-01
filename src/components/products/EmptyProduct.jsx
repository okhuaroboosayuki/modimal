function EmptyProduct() {
  return (
    <p className="flex w-full items-center justify-center">
      No products available.
    </p>
  );
}

export default EmptyProduct;

export function ProductImgLoadMsg() {
  return <p className="flex h-full w-full">Could not load product image.</p>;
}
