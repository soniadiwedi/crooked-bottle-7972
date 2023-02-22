import React from "react";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import PageNotFound from './PageNotFound';
import MobilePage from "./Mobile/MobilePage";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/mobile-page" element={<MobilePage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
