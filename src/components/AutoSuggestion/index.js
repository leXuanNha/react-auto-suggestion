import React, { useState, useRef, useEffect, useCallback } from "react";
import { Input } from "reactstrap";
import SuggestionBox from "./SuggestionBox";
import useSearch from "../../hooks/useSearch";
import {
  DEFAULT_NUM_OF_CHAR_TO_DISPLAY_RESULT_BOX,
  DEFAULT_NUM_OF_PRODUCT_TO_DISPLAY,
} from "../../constants";
import "./style.css";
import { debounce } from "lodash";

const AutoSuggestion = ({
  inputProps,
  numOfCharToDisplayResultBox = DEFAULT_NUM_OF_CHAR_TO_DISPLAY_RESULT_BOX,
  numOfProductToDisplay = DEFAULT_NUM_OF_PRODUCT_TO_DISPLAY,
  groups = ["suggestion", "collection", "product"],
  renderSuggestionGroup,
  renderCollectionGroup,
  renderProjectGroup,
  renderInput,
}) => {
  const wrapperRef = useRef(null);

  const [isOpenSuggestion, setIsOpenSuggestion] = useState(false);

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [filteredCollections, setFilteredCollections] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { getSuggestionList, getCollectionList, getProductList } = useSearch();

  const { value } = inputProps;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current) {
        if (
          wrapperRef.current.contains(event.target) &&
          value.length >= numOfCharToDisplayResultBox
        ) {
          setIsOpenSuggestion(true);
        }

        if (!wrapperRef.current.contains(event.target)) {
          setIsOpenSuggestion(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, value, numOfCharToDisplayResultBox]);

  const onDebounceFilter = debounce((value) => {
    setIsOpenSuggestion(value.length >= numOfCharToDisplayResultBox);
    setFilteredSuggestions(getSuggestionList(value));
    setFilteredCollections(getCollectionList(value));
    setFilteredProducts(getProductList(value));
  }, 700);

  const debounceFilter = useCallback(onDebounceFilter, []);

  useEffect(() => {
    debounceFilter(value);
  }, [value]);

  const defaultRenderInput = () => (
    <Input placeholder="Enter something" {...inputProps} />
  );

  const renderInputComponent = () => {
    if (renderInput) {
      return renderInput();
    }

    return defaultRenderInput();
  };

  return (
    <div ref={wrapperRef}>
      {renderInputComponent()}

      <SuggestionBox
        isOpen={isOpenSuggestion && groups.length > 0}
        searchText={value}
        filteredSuggestions={filteredSuggestions}
        filteredCollections={filteredCollections}
        filteredProducts={filteredProducts}
        numOfProductToDisplay={numOfProductToDisplay}
        groups={groups}
        renderSuggestionGroup={renderSuggestionGroup}
        renderCollectionGroup={renderCollectionGroup}
        renderProjectGroup={renderProjectGroup}
      />
    </div>
  );
};

export default AutoSuggestion;
