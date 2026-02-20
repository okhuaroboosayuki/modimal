import { ProgressLink } from "../../ProgressLinks";

function NavImageCard({ src, alt, title, url, onCloseModal }) {
  return (
    <>
      {!url && !title ? (
        <img src={src} alt={alt} loading="lazy" height={420} />
      ) : (
        <ProgressLink
          to={url}
          onClick={onCloseModal}
          className="flex flex-col items-start gap-3 capitalize"
        >
          <img src={src} alt={alt} loading="lazy" height={420} />

          <p>{title}</p>
        </ProgressLink>
      )}
    </>
  );
}

export default NavImageCard;
