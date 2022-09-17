import { suggestions, collections, products } from "../data";

const useSearch = () => {
  const getSuggestionList = (searchText) => {
    if (searchText) {
      return suggestions.filter((item) =>
        item.term.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    return [];
  };

  const getCollectionList = (searchText) => {
    if (searchText) {
      return collections.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    return [];
  };

  const getProductList = (searchText) => {
    if (searchText) {
      return products.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    return [];
  };

  return {
    getSuggestionList,
    getCollectionList,
    getProductList,
  };
};

export default useSearch;
