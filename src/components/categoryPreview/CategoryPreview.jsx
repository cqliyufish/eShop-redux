import React from "react";
import ProductCard from "components/productCard/ProductCard";
import { Link } from "react-router-dom";

import "./categoryPreview.scss";
export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title} style={{ color: "black" }}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
