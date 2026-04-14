import SEO from "../components/SEO";
import FavoritesPageContent from "../features/products/FavoritesPageContent";

function Favorites() {
  return (
    <>
      <SEO
        title={"Your Favorites"}
        description="Check out your favorite products at Modimal. Explore and manage your wishlist of must-have items in one convenient place."
        url={"favorites"}
      />

      <FavoritesPageContent />
    </>
  );
}

export default Favorites;
