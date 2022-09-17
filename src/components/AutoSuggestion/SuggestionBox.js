import React from "react";
import SuggestionGroup from "./SuggestionGroup";
import CollectionGroup from "./CollectionGroup";
import ProductGroup from "./ProductGroup";
import "./style.css";

const SuggestionBox = ({
  isOpen = false,
  searchText = "",
  filteredSuggestions = [],
  filteredCollections = [],
  filteredProducts = [],
  numOfProductToDisplay = 2,
  groups,
  renderSuggestionGroup,
  renderCollectionGroup,
  renderProjectGroup,
}) => {
  if (isOpen) {
    return (
      <div className="suggestion-container">
        {groups.map((item) => {
          if (item === "suggestion") {
            return renderSuggestionGroup ? (
              <div key={item}>
                {renderSuggestionGroup(searchText, filteredSuggestions)}
              </div>
            ) : (
              <SuggestionGroup
                key={item}
                searchText={searchText}
                suggestions={filteredSuggestions}
              />
            );
          }

          if (item === "collection") {
            return renderCollectionGroup ? (
              <div key={item}>
                {renderCollectionGroup(searchText, filteredCollections)}
              </div>
            ) : (
              <CollectionGroup key={item} collections={filteredCollections} />
            );
          }

          if (item === "product") {
            return renderProjectGroup ? (
              <div key={item}>
                {renderProjectGroup(numOfProductToDisplay, filteredProducts)}
              </div>
            ) : (
              <ProductGroup
                key={item}
                numOfProductToDisplay={numOfProductToDisplay}
                products={filteredProducts}
              />
            );
          }

          return null;
        })}

        {filteredProducts.length > numOfProductToDisplay && (
          <p className="view-all">{`View all ${filteredProducts.length} products`}</p>
        )}
      </div>
    );
  }

  return null;
};

export default SuggestionBox;
