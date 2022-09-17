import React from "react";
import "./style.css";

const CollectionGroup = ({ collections = [] }) => {
  return (
    <div>
      <p className="group-header">Collections</p>
      <ul className="group-content">
        {collections.length > 0 ? (
          collections.map((item) => (
            <li key={item.id}>
              <a
                className="collection-item"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
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

export default CollectionGroup;
