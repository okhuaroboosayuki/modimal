import { Link } from "react-router-dom";

function BreadCrumbs({ productCategory, productName, pageName }) {
  const linkPath = productCategory
    ? productCategory.split(" ").join("-")
    : location.pathname.split("/")[1].split("-").join(" ");

  return (
    <div className="[&>a]:text-primary flex items-start gap-1.5 text-xs capitalize sm:text-base">
      <Link to={"/"} className="hover:text-gray40">
        Home
      </Link>

      <span className="text-gray60">/</span>

      {pageName && <span>{pageName}</span>}

      {productCategory && (
        <Link to={`/${linkPath}`} className="hover:text-gray40">
          {productCategory}
        </Link>
      )}

      {productName && (
        <>
          <span className="text-gray60">/</span>
          <span>{productName}</span>
        </>
      )}
    </div>
  );
}

export default BreadCrumbs;
