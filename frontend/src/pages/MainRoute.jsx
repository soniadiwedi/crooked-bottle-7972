import React from "react";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Cart from "./Cart/Cart";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
