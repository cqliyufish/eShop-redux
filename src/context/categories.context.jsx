import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "utils/firebase/database";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
/////////////////////////////// add categories to DB //////////////////////////////////
// run only one time
// import SHOP_DATA from "shop-data.js";

// useEffect(() => {
//   addCollectionAndDocuments("categories", SHOP_DATA);
// }, []);
