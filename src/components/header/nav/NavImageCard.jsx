import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { ProgressLink } from "../../ProgressLinks";

function NavImageCard({
  src,
  srcSet,
  placeholderSrc,
  alt,
  title,
  url,
  onCloseModal,
}) {
  return (
    <>
      {!url && !title ? (
        <LazyLoadImage
          src={src}
          srcSet={srcSet}
          placeholderSrc={placeholderSrc}
          alt={alt}
          effect="black-and-white"
          loading="lazy"
          threshold={100}
          delayMethod="throttle"
          delayTime={500}
          className="h-[420px]"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
        />
      ) : (
        <ProgressLink
          to={url}
          onClick={onCloseModal}
          className="flex flex-col items-start gap-3 capitalize"
        >
          <LazyLoadImage
            src={src}
            srcSet={srcSet}
            placeholderSrc={placeholderSrc}
            alt={alt}
            effect="black-and-white"
            loading="lazy"
            threshold={100}
            delayMethod="throttle"
            delayTime={500}
            className="h-[420px]"
            wrapperProps={{
              style: { transitionDelay: "1s" },
            }}
          />

          <p>{title}</p>
        </ProgressLink>
      )}
    </>
  );
}

export default NavImageCard;
