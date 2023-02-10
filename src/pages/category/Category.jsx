import React, { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "context/categories.context";
import { useParams } from "react-router-dom";
import { CategoryContainer, Title } from "./category.style";
import ProductCard from "components/productCard/ProductCard";
export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
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
