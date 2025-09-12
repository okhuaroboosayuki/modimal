import { useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function MenuItem({ content, heading }) {
  const [showList, setShowList] = useState(false);

  const linkPath = heading?.split(" ").join("-");

  const toggleShowList = () => {
    setShowList((prev) => !prev);
  };

  return (
    <div className="pb w-full gap-2 border-b">
      {heading && (
        <Link to={linkPath} className="flex justify-between">
          <h5>{heading}</h5>

          <span className="icon">
            <HiOutlineArrowLongRight />
          </span>
        </Link>
      )}

      {content && (
        <div className="flex justify-between" onClick={toggleShowList}>
          <h5>{content.menu_name}</h5>

          <span className="icon">
            <RiArrowDownSLine
              className={`${showList && "-rotate-180"} transition-500-in-out`}
            />
          </span>
        </div>
      )}

      {content && showList && (
        <ul className="text-gray40 flex flex-col items-start gap-4 py-4 pl-8.5 font-light">
          {content.tags.map((tag, index) => {
            const path = tag.split(" ").join("-");

            return (
              <li key={index}>
                <Link to={path} className="focus:underline">
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default MenuItem;
