import React from "react";
import "./style.css";

const ProductGroup = ({ products = [], numOfProductToDisplay = 2 }) => {
  return (
    <div>
      <p className="group-header">Products</p>
      <ul className="group-content">
        {products.length > 0 ? (
          products.slice(0, numOfProductToDisplay).map((item) => (
            <li key={item.id}>
              <a
                className="product-item"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-image"
                />
                <div className="product-info">
                  <p className="product-name">{item.title}</p>
                  <p className="product-brand">{item.brand}</p>
                  <p className="product-price">{item.price}</p>
                </div>
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

export default ProductGroup;
