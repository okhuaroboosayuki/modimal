import { Link } from "react-router-dom";
import NavImageCardContainer from "./NavImageCardContainer";
import NavImageCard from "./NavImageCard";
import {
  collectionImageCards,
  newImageCards,
  plusSizeImageCards,
  sustainabilityImageCards,
} from "./ImageCardDetails";
import SubNavListsSection from "./SubNavListsSection";
import {
  categoryList,
  featuredList,
  moreList,
  sustainabilityList,
  trendingList,
} from "./subNavTags";

function SubNavLists({ menuName }) {
  return (
    <div className="hidden h-[500px] w-full items-start justify-between gap-14 bg-white px-14 pt-4 pb-14 md:flex xl:px-[108px]">
      <nav className="grid grid-cols-3 gap-6 text-base capitalize lg:text-lg">
        {menuName === "sustainability" ? (
          <SubNavListsSection content={sustainabilityList} />
        ) : (
          <>
            <SubNavListsSection content={categoryList} />

            {menuName === "new-in" && (
              <SubNavListsSection content={trendingList} />
            )}

            {menuName !== "plus-size" && menuName !== "new-in" && (
              <>
                <SubNavListsSection content={featuredList} />

                <SubNavListsSection content={moreList} />
              </>
            )}
          </>
        )}
      </nav>

      {menuName === "collection" && (
        <NavImageCardContainer>
          {collectionImageCards.map((card) => (
            <NavImageCard
              src={card.image}
              alt={card.alt}
              title={card.title}
              key={card.title}
            />
          ))}
        </NavImageCardContainer>
      )}

      {menuName === "new-in" && (
        <NavImageCardContainer>
          {newImageCards.map((card) => (
            <NavImageCard
              src={card.image}
              alt={card.alt}
              title={card.title}
              key={card.title}
            />
          ))}
        </NavImageCardContainer>
      )}

      {menuName === "plus-size" && (
        <NavImageCardContainer>
          {plusSizeImageCards.map((card) => (
            <NavImageCard
              src={card.image}
              alt={card.alt}
              title={card.title}
              key={card.title}
            />
          ))}
        </NavImageCardContainer>
      )}

      {menuName === "sustainability" && (
        <NavImageCardContainer>
          {sustainabilityImageCards.map((card) => (
            <NavImageCard src={card.image} alt={card.alt} key={card.alt} />
          ))}
        </NavImageCardContainer>
      )}
    </div>
  );
}

export default SubNavLists;
