import CategoriesPreview from "pages/categoriesPreview/CategoriesPreview";
import Category from "pages/category/Category";
import React from "react";
import { Route, Routes } from "react-router-dom";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
