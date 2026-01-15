import { NavLink } from "react-router-dom";

function SubNavListsSection({ content, onCloseModal }) {
  return (
    <section className="flex flex-col items-start gap-6">
      <h5 className="text-neutral-black">{content.heading}</h5>

      <ul className="text-gray40 link-hover flex flex-col items-start gap-2 font-light">
        {content.tags.map((tag, index) => {
          const path = tag.split(" ").join("-");

          return (
            <li key={index}>
              <NavLink to={`/${path}`} onClick={onCloseModal}>
                {tag}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default SubNavListsSection;
