import React from "react";
import { Container } from "./categoriesPreview.style";
import CategoryPreview from "components/categoryPreview/CategoryPreview";
import Spinner from "components/spinner/Spinner";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "redux/category/categorySlector";
export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <CategoryPreview
            title={title}
            key={title}
            products={categoriesMap[title]}
          />
        ))
      )}
    </Container>
  );
}
