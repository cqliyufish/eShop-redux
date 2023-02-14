import Navigation from "components/navigation/Navigation";
import Authentication from "pages/authentication/Authentication";
import Checkout from "pages/checkout/Checkout";
import Home from "pages/home/Home";
import Shop from "pages/shop/Shop";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChangedListener } from "utils/firebase/auth";
import { createUserDocumentFromAuth } from "utils/firebase/database";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction";

function App() {
  const dispatch = useDispatch();
  ////////////////////////////// User init ////////////////////////////////
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user); //get user ref
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe; //do clear
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
