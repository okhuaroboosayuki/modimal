import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import { ProgressLink } from "../ProgressLinks";
import homeBlouse from "../../assets/images/home_blouse.png";
import homeBlouseSrcSet from "../../assets/images/home_blouse.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import homeBlouseBlur from "../../assets/images/home_blouse.png?w=20&blur=2&format=webp&as=base64";
import homePants from "../../assets/images/home-pants.png";
import homePantsSrcSet from "../../assets/images/home-pants.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import homePantsBlur from "../../assets/images/home-pants.png?w=20&blur=2&format=webp&as=base64";
import homeDress from "../../assets/images/home-dress.png";
import homeDressSrcSet from "../../assets/images/home-dress.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import homeDressBlur from "../../assets/images/home-dress.png?w=20&blur=2&format=webp&as=base64";
import homeOutwears from "../../assets/images/home-outwears.png";
import homeOutwearsSrcSet from "../../assets/images/home-outwears.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import homeOutwearsBlur from "../../assets/images/home-outwears.png?w=20&blur=2&format=webp&as=base64";

const collections = [
  {
    id: 1,
    label: "Blouses",
    href: "/tops-&-blouses",
    src: homeBlouse,
    srcSet: homeBlouseSrcSet,
    placeholderSrc: homeBlouseBlur,
    alt: "White blouse close-up",
    className: "aspect-[600/518]",
    labelPosition: "bottom-3 right-3",
  },
  {
    id: 2,
    label: "Pants",
    href: "/pants",
    src: homePants,
    srcSet: homePantsSrcSet,
    placeholderSrc: homePantsBlur,
    alt: "Model wearing green trousers",
    className: "aspect-[600/840]",
    labelPosition: "bottom-3 left-3",
  },
  {
    id: 3,
    label: "Dresses",
    href: "/dresses-&-jumpsuits",
    src: homeDress,
    srcSet: homeDressSrcSet,
    placeholderSrc: homeDressBlur,
    alt: "Model in an olive dress seated",
    className: "aspect-[600/757]",
    labelPosition: "bottom-3 right-3",
  },
  {
    id: 4,
    label: "Outwear",
    href: "/outwear-&-jackets",
    src: homeOutwears,
    srcSet: homeOutwearsSrcSet,
    placeholderSrc: homeOutwearsBlur,
    alt: "Camel coat close-up",
    className: "aspect-[600/435]",
    labelPosition: "bottom-3 right-3",
  },
];

function CollectionCard({
  label,
  href,
  src,
  srcSet,
  placeholderSrc,
  alt,
  className,
  labelPosition,
}) {
  return (
    <ProgressLink
      to={href}
      className={`group relative block overflow-hidden ${className}`}
    >
      <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
        <LazyLoadImage
          src={src}
          srcSet={srcSet}
          sizes="100vw"
          placeholderSrc={placeholderSrc}
          effect="black-and-white"
          useIntersectionObserver={true}
          threshold={100}
          delayMethod="debounce"
          delayTime={500}
          alt={alt}
          className="h-full w-full object-cover"
          wrapperClassName="block h-full w-full"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      <span
        className={`absolute ${labelPosition} bg-white px-4 py-2 text-sm text-neutral-800 capitalize`}
      >
        {label}
      </span>
    </ProgressLink>
  );
}

function Collection() {
  return (
    <div className="flex flex-col justify-center gap-6 capitalize">
      <h1 className="text-2xl font-semibold md:text-[32px]">collection</h1>

      <div className="grid w-full grid-cols-2 gap-x-6">
        {/* Left column — short top, tall bottom */}
        <div className="flex flex-col gap-1">
          <CollectionCard {...collections[0]} /> {/* Blouses */}
          <CollectionCard {...collections[2]} /> {/* Dresses */}
        </div>

        {/* Right column — tall top, short bottom */}
        <div className="flex flex-col gap-1">
          <CollectionCard {...collections[1]} /> {/* Pants */}
          <CollectionCard {...collections[3]} /> {/* Outwear */}
        </div>
      </div>
    </div>
  );
}

export default Collection;
