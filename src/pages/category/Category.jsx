import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoryContainer, Title } from "./category.style";
import ProductCard from "components/productCard/ProductCard";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "redux/category/categorySlector";

export default function Category() {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
}
