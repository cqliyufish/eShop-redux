import React from "react";
import ProductCard from "components/productCard/ProductCard";
import { Container, Preview, LinkTo } from "./categoryPreview.sytle";

export default function CategoryPreview({ title, products }) {
  return (
    <Container>
      <h2>
        <LinkTo to={title}>{title.toUpperCase()}</LinkTo>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </Container>
  );
}
