import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoryContainer, Title } from "./category.style";
import ProductCard from "components/productCard/ProductCard";

import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "redux/category/categorySlector";
import Spinner from "components/spinner/Spinner";

export default function Category() {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </CategoryContainer>
    </>
  );
}
