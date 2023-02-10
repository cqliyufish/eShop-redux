import Navigation from "components/navigation/Navigation";
import Authentication from "pages/authentication/Authentication";
import Checkout from "pages/checkout/Checkout";
import Home from "pages/home/Home";
import Shop from "pages/shop/Shop";
import { Route, Routes } from "react-router-dom";

function App() {
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
