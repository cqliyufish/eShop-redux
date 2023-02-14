import React from "react";
import { Container } from "./categoriesPreview.style";
import CategoryPreview from "components/categoryPreview/CategoryPreview";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "redux/category/categorySlector";
export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Container>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview
          title={title}
          key={title}
          products={categoriesMap[title]}
        />
      ))}
    </Container>
  );
}
