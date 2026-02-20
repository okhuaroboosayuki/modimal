import { ProgressLink } from "./ProgressLinks";

function BreadCrumbs({ productCategory, productName, pageName }) {
  const linkPath = productCategory
    ? productCategory.split(" ").join("-")
    : location.pathname.split("/")[1].split("-").join(" ");

  return (
    <div className="[&>a]:text-primary flex items-start gap-1.5 text-xs capitalize sm:text-base">
      <ProgressLink to={"/"} className="hover:text-gray40">
        Home
      </ProgressLink>

      <span className="text-gray60">/</span>

      {pageName && <span>{pageName}</span>}

      {productCategory && (
        <ProgressLink to={`/${linkPath}`} className="hover:text-gray40">
          {productCategory}
        </ProgressLink>
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
