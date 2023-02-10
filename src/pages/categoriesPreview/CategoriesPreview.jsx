import React, { useContext } from "react";
import { CategoriesContext } from "context/categories.context";
import { Container } from "./categoriesPreview.style";
import CategoryPreview from "components/categoryPreview/CategoryPreview";

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

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
