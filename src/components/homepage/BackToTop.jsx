import { useState } from "react";
import { ImArrowUp } from "react-icons/im";

function BackToTop() {
  const [isVisble, setIsVisible] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 2000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const handleBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="fixed right-5 bottom-10 z-50"
      style={{ display: isVisble ? "block" : "none" }}
    >
      <button
        className="bg-primary-400 cursor-pointer rounded-full p-6 shadow-lg"
        onClick={handleBackToTopClick}
      >
        <ImArrowUp width={"200px"} />
      </button>
    </section>
  );
}

export default BackToTop;
