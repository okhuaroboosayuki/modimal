import { ProgressLink } from "../ProgressLinks";

const collections = [
  {
    id: 1,
    label: "Blouses",
    href: "/collections/blouses",
    src: "/images/home_blouse.png",
    alt: "White blouse close-up",
    className: "aspect-[600/518]",
    labelPosition: "bottom-3 right-3",
  },
  {
    id: 2,
    label: "Pants",
    href: "/pants",
    src: "/images/home-pants.png",
    alt: "Model wearing green trousers",
    className: "aspect-[600/840]",
    labelPosition: "bottom-3 left-3",
  },
  {
    id: 3,
    label: "Dresses",
    href: "/dresses-&-jumpsuits",
    src: "/images/home-dress.png",
    alt: "Model in an olive dress seated",
    className: "aspect-[600/757]",
    labelPosition: "bottom-3 right-3",
  },
  {
    id: 4,
    label: "Outwear",
    href: "/outwear-&-jackets",
    src: "/images/home-outwears.png",
    alt: "Camel coat close-up",
    className: "aspect-[600/435]",
    labelPosition: "bottom-3 right-3",
  },
];

function CollectionCard({ label, href, src, alt, className, labelPosition }) {
  return (
    <ProgressLink
      to={href}
      className={`group relative block overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

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
