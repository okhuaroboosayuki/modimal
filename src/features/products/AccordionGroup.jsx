import { useState } from "react";
import ProductDetailsAccordion from "../../components/products/ProductDetailsAccordion";

function AccordionGroup({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full lg:w-fit">
      {items.map((item, index) => (
        <ProductDetailsAccordion
          key={index}
          accordionTitle={item.accordionTitle}
          details={item.details}
          clickable={item.clickable}
          tags={item.tags}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default AccordionGroup;
