import CategoriesPreview from "pages/categoriesPreview/CategoriesPreview";
import Category from "pages/category/Category";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getCategoriesAndDocuments } from "utils/firebase/database";
import { useDispatch } from "react-redux";
import { setCategories } from "redux/category/categoryAction";

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      console.log("categoriesArray", categoriesArray);
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
