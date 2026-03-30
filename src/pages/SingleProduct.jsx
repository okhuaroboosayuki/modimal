import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../features/products/Product";
import { useProduct } from "./../features/products/useProduct";

function SingleProduct() {
  const { productId } = useParams();
  const { data, isProductLoading } = useProduct();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [productId]);

  return <Product data={data} isLoading={isProductLoading} />;
}

export default SingleProduct;
