import { Link } from "react-router-dom";

function NavImageCard({ src, alt, title, url, onCloseModal }) {
  return (
    <Link
      to={url}
      onClick={onCloseModal}
      className="flex flex-col items-start gap-3 capitalize"
    >
      <img src={src} alt={alt} loading="lazy" height={420} />

      <p>{title}</p>
    </Link>
  );
}

export default NavImageCard;
