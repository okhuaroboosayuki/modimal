import BackToTop from "../components/homepage/BackToTop";
import Bestsellers from "../components/homepage/Bestsellers";
import Collection from "../components/homepage/Collection";
import Hero from "../components/homepage/Hero";
import Modiweek from "../components/homepage/Modiweek";
import Socials from "../components/homepage/Socials";
import Sustainability from "../components/homepage/Sustainability";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
        title={"Modimal - Stylish Women's Clothing & Fashion"}
        description="Discover the latest trends in the world of women fashion at Modimal. Explore our curated collection of stylish clothing, accessories, and more to elevate your wardrobe and express your unique style."
        url={""}
      />

      <section className="flex h-full w-full flex-col 2xl:pb-30">
        <Hero />

        <section className="flex w-full flex-col gap-15 px-6 py-20 md:px-14 lg:px-28">
          <Bestsellers />

          <Collection />

          <Modiweek />
        </section>

        <Sustainability />

        <Socials />

        <BackToTop />
      </section>
    </>
  );
}

export default Home;
