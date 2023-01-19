import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import CheckoutAd from "./components/CheckoutAd";
import ShoppingBasket from "./components/ShoppingBasket";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Banner />
              <ProductList />
            </>
          }
        />
        <Route
          exact
          path='/checkOut'
          element={
            <>
              <CheckoutAd />
              <ShoppingBasket />
            </>
          }
        />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
