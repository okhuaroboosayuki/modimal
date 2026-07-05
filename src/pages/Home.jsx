import Bestsellers from "../components/homepage/Bestsellers";
import Hero from "../components/homepage/Hero";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
        title={"Modimal - Stylish Women's Clothing & Fashion"}
        description="Discover the latest trends in the world of women fashion at Modimal. Explore our curated collection of stylish clothing, accessories, and more to elevate your wardrobe and express your unique style."
        url={""}
      />

      <section className="flex h-full w-full flex-col">
        <Hero />

        <section className="flex w-full flex-col px-6 py-20 md:px-14 lg:px-28">
          <Bestsellers />
        </section>
      </section>
    </>
  );
}

export default Home;
