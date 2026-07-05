import { Helmet } from "react-helmet-async";

const BASE_URL = "https://modimal-store.vercel.app";
const DEFAULT_IMAGE = "/frame-427319608.png";

const DEFAULT_DESCRIPTION = "Shop stylish women's clothing at Modimal.";

export default function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
}) {
  const fullTitle = title
    ? `${title} | Modimal`
    : "Modimal - Stylish Women's Clothing & Fashion";
  const fullUrl = url ? `${BASE_URL}/${url}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Modimal" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export function ProductStructuredData({ product }) {
  if (!product) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.productName,
    description: product.description || DEFAULT_DESCRIPTION,
    image: product.productImages?.[0]?.url,
    brand: {
      "@type": "Brand",
      name: "Modimal",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "NGN",
      availability:
        product.stockQuantity > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
