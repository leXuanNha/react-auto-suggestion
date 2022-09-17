import React from "react";
import Highlighted from "../Highlighted";
import "./style.css";

const SuggestionGroup = ({
  searchText = "",
  suggestions = [],
}) => {
  return (
    <div>
      <p className="group-header">Suggestions</p>
      <ul className="group-content">
        {suggestions.length > 0 ? (
          suggestions.map((item) => (
            <li key={item.url}>
              <a
                className="suggestion-item"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <Highlighted text={item.term} highlight={searchText} />
              </a>
            </li>
          ))
        ) : (
          <li>
            <p className="not-found">No data.</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SuggestionGroup;
