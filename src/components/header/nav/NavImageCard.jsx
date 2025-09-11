function NavImageCard({ src, alt, title }) {
  return (
    <div className="flex flex-col items-start gap-3 capitalize">
      <img src={src} alt={alt} loading="lazy" height={420} />

      <p>{title}</p>
    </div>
  );
}

export default NavImageCard;
