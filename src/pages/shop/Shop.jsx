import CategoriesPreview from "pages/categoriesPreview/CategoriesPreview";
import Category from "pages/category/Category";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategories } from "redux/category/getCategoryCall";

export default function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCategories(dispatch);
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
