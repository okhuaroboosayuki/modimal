import { useRelatedProducts } from "./useRelatedProducts";
import { LoadingSpinner } from "../../components/Loaders";
import ProductDetailsAccordion from "../../components/products/ProductDetailsAccordion";
import ProductImageCarousel from "./singleProduct/ProductImageCarousel";
import AccordionGroup from "./AccordionGroup";
import BreadCrumbs from "../../components/BreadCrumbs";
import ProductInfo from "./singleProduct/ProductInfo";
import RelatedProducts from "./singleProduct/RelatedProducts";

function Product({ data, isLoading }) {
  const {
    id,
    productName,
    description,
    category,
    productImages,
    availableColors,
    fittingDetails,
    productDetails,
    fabricDetails,
    availableSizes,
  } = data?.data[0] || {};

  const { relatedProducts, isRelatedProductLoading } =
    useRelatedProducts(category);

  const relatedProductsData =
    relatedProducts?.data?.filter((product) => product.id !== id) || [];

  return (
    <section className="flex w-full flex-col gap-2 py-8 sm:gap-12">
      <div className="px-5 sm:px-13 xl:px-32" id="breadcrumb_wrapper">
        <BreadCrumbs productCategory={category} productName={productName} />
      </div>

      {isLoading ? (
        <div className="w-full">
          <LoadingSpinner />
        </div>
      ) : (
        <section className="flex w-full flex-col items-start justify-start gap-12 sm:gap-8">
          <section className="flex w-full flex-col items-start justify-start gap-6 md:flex-row md:px-13 xl:px-32">
            {/* image */}
            <ProductImageCarousel
              productImages={productImages}
              productName={productName}
            />

            {/* title, colors, CTA */}
            <ProductInfo
              id={id}
              productName={productName}
              description={description}
              availableColors={availableColors}
              availableSizes={availableSizes}
            />
          </section>

          <section className="flex w-full flex-col-reverse items-start justify-start gap-12 px-5 sm:px-13 lg:flex-row xl:px-32">
            <AccordionGroup
              items={[
                { accordionTitle: "fitting", details: fittingDetails },
                {
                  accordionTitle: "fabric & care",
                  details: fabricDetails.care,
                },
                { accordionTitle: "product detail", details: productDetails },
                {
                  accordionTitle: "shipping and return",
                  details: `Shipping: is free on US , Canada orders are $175.
                  Returns: Unwashed, unworn items are eligible for returns or exchanges within 30 days of purchase. Final Sale items are not eligible for returns or exchanges.`,
                },
              ]}
            />

            <ProductDetailsAccordion
              accordionTitle={fabricDetails.type}
              details={fabricDetails.details}
              tags={fabricDetails.tags}
              clickable={false}
            />
          </section>

          {/* other product offerings */}
          <RelatedProducts
            isLoading={isRelatedProductLoading}
            relatedProducts={relatedProductsData}
          />
        </section>
      )}
    </section>
  );
}

export default Product;
