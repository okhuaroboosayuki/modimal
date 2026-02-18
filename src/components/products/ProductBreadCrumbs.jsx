import { Link } from "react-router-dom";

function ProductBreadCrumbs({ category, productName }) {
  const categoryLink = category ? category.split(" ").join("-") : "";

  return (
    <div className="[&>a]:text-primary flex items-start gap-1.5 px-5 text-xs capitalize sm:px-13 sm:text-base xl:px-32">
      <Link to={"/"}>Home</Link>
      <span className="text-gray60">/</span>
      <Link to={`/${categoryLink}`}>{category}</Link>
      <span className="text-gray60">/</span>
      <span>{productName}</span>
    </div>
  );
}

export default ProductBreadCrumbs;
