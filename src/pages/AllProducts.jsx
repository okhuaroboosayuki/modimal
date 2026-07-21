import SEO from "../components/SEO";
import ProductsPageContent from "../features/products/ProductsPageContent";
import { useProducts } from "./../features/products/useProducts";
import shopAllImage from "../assets/images/frame-427319608.png";
import shopAllImageSrcSet from "../assets/images/frame-427319608.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import shopAllImageBlur from "../assets/images/frame-427319608.png?w=20&blur=2&format=webp&as=base64";

function AllProducts() {
  const {
    isAllProductLoading,
    allProducts,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useProducts();

  const imageObject = {
    src: shopAllImage,
    srcSet: shopAllImageSrcSet,
    blur: shopAllImageBlur,
  };

  return (
    <>
      <SEO
        title={"Shop All Products"}
        description="Browse our full collection of women's clothing at Modimal."
        url={"shop-all"}
      />

      <ProductsPageContent
        key={"all products"}
        data={allProducts}
        isLoading={isAllProductLoading}
        imgObj={imageObject}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
      />
    </>
  );
}

export default AllProducts;
