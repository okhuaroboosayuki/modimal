import pants from "../../assets/images/pants.png";
import pantsSrcSet from "../../assets/images/pants.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import pantsPlaceholderSrc from "../../assets/images/pants.png?w=20&blur=2&format=webp&as=base64";
import plus from "../../assets/images/plus.png";
import plusSrcSet from "../../assets/images/plus.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import plusPlaceholderSrc from "../../assets/images/plus.png?w=20&blur=2&format=webp&as=base64";
import fallCol from "../../assets/images/fall-col.png";
import fallColSrcSet from "../../assets/images/fall-col.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import fallColplaceholderSrc from "../../assets/images/fall-col.png?w=20&blur=2&format=webp&as=base64";
import blouses from "../../assets/images/blouses.png";
import blouseSrcSet from "../../assets/images/blouses.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import blousesPlaceholderSrc from "../../assets/images/blouses.png?w=20&blur=2&format=webp&as=base64";
import dresses from "../../assets/images/dresses.png";
import dressesSrcSet from "../../assets/images/dresses.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import dressesPlaceholderSrc from "../../assets/images/dresses.png?w=20&blur=2&format=webp&as=base64";
import plusPants from "../../assets/images/plus-pant.png";
import plusPantsSrcSet from "../../assets/images/plus-pant.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import plusPantsPlaceholderSrc from "../../assets/images/plus-pant.png?w=20&blur=2&format=webp&as=base64";
import plusDresses from "../../assets/images/plus-dresses.png";
import plusDressesSrcSet from "../../assets/images/plus-dresses.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import plusDressesPlaceholderSrc from "../../assets/images/plus-dresses.png?w=20&blur=2&format=webp&as=base64";
import plusBlouses from "../../assets/images/plus-blouses.png";
import plusBlousesSrcSet from "../../assets/images/plus-blouses.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import plusBlousesPlaceholderSrc from "../../assets/images/plus-blouses.png?w=20&blur=2&format=webp&as=base64";
import sustainImg from "../../assets/images/sustain-1.png";
import sustainImgSrcSet from "../../assets/images/sustain-1.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import sustainImgPlaceholderSrc from "../../assets/images/sustain-1.png?w=20&blur=2&format=webp&as=base64";
import sustainTwoImg from "../../assets/images/sustain-2.png";
import sustainTwoImgSrcSet from "../../assets/images/sustain-2.png?w=640;768;1024;1440;1920&format=webp&as=srcset";
import sustainTwoImgPlaceholderSrc from "../../assets/images/sustain-2.png?w=20&blur=2&format=webp&as=base64";

export const collectionImageCards = [
  {
    src: pants,
    srcSet: pantsSrcSet,
    placeholderSrc: pantsPlaceholderSrc,
    title: "pants",
    alt: "image showing a model in a green pant and a white shirt",
    url: "/pants",
  },
  {
    src: plus,
    srcSet: plusSrcSet,
    placeholderSrc: plusPlaceholderSrc,
    title: "plus size",
    alt: "plus sized model in an all black dress",
    url: "/plus-size",
  },
];

export const newImageCards = [
  {
    src: fallCol,
    srcSet: fallColSrcSet,
    placeholderSrc: fallColplaceholderSrc,
    title: "fall collection",
    alt: "image showing a model in an all green dress",
    url: "/fall-collection",
  },
  {
    src: blouses,
    srcSet: blouseSrcSet,
    placeholderSrc: blousesPlaceholderSrc,
    title: "blouses",
    alt: "portrait image showing a model in a green pant and a white round neck shirt",
    url: "/tops-&-blouses",
  },
  {
    src: dresses,
    srcSet: dressesSrcSet,
    placeholderSrc: dressesPlaceholderSrc,
    title: "dresses",
    alt: "image showing a model in an indigo colored dress",
    url: "/dresses-&-jumpsuits",
  },
];

export const plusSizeImageCards = [
  {
    src: plusPants,
    srcSet: plusPantsSrcSet,
    placeholderSrc: plusPantsPlaceholderSrc,
    title: "pants",
    alt: "image showing a plus sized model in a demin jeans and a white shirt",
    url: "/pants",
  },
  {
    src: plusDresses,
    srcSet: plusDressesSrcSet,
    placeholderSrc: plusDressesPlaceholderSrc,
    title: "dresses",
    alt: "image showing a plus sized model in an all white dress",
    url: "/dresses-&-jumpsuits",
  },
  {
    src: plusBlouses,
    srcSet: plusBlousesSrcSet,
    placeholderSrc: plusBlousesPlaceholderSrc,
    alt: "image showing a plus sized model in a jean and a black sleeve shirt",
    url: "/tops-&-blouses",
  },
];

export const sustainabilityImageCards = [
  {
    src: sustainImg,
    srcSet: sustainImgSrcSet,
    placeholderSrc: sustainImgPlaceholderSrc,
    alt: "image showing a model in an all white dress",
  },
  {
    src: sustainTwoImg,
    srcSet: sustainTwoImgSrcSet,
    placeholderSrc: sustainTwoImgPlaceholderSrc,
    alt: "image showing three rows of sewing thread, some materials, and a flower",
  },
];
