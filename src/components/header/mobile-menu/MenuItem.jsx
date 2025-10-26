import { useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function MenuItem({ content, heading, onCloseModal }) {
  const [showList, setShowList] = useState(false);

  const linkPath = heading?.split(" ").join("-");

  const toggleShowList = () => {
    setShowList((prev) => !prev);
  };

  return (
    <div className="pb w-full gap-2 border-b">
      {heading && (
        <NavLink
          to={linkPath}
          onClick={onCloseModal}
          className="flex justify-between"
        >
          <h5>{heading}</h5>

          <span className="icon">
            <HiOutlineArrowLongRight />
          </span>
        </NavLink>
      )}

      {content && (
        <>
          <div className="flex justify-between" onClick={toggleShowList}>
            <h5>{content.menu_name}</h5>

            <span className="icon">
              <RiArrowDownSLine
                className={`${showList && "-rotate-180"} transition-500-in-out`}
              />
            </span>
          </div>

          {showList && (
            <ul className="text-gray40 flex flex-col items-start gap-4 py-4 pl-8.5 font-light">
              {content.tags.map((tag, index) => {
                const path = tag.split(" ").join("-");

                return (
                  <li key={index}>
                    <NavLink
                      to={`/${path}`}
                      viewTransition="true"
                      onClick={onCloseModal}
                      className="focus:underline"
                    >
                      {tag}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default MenuItem;
