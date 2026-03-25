function EmptyProduct({ message = "No products available." }) {
  return (
    <p className="text-neutral-black flex w-full items-center justify-center">
      {message}
    </p>
  );
}

export default EmptyProduct;

export function ProductImgLoadMsg() {
  return <p className="flex h-full w-full">Could not load product image.</p>;
}
