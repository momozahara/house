import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./App.css";

import Home from "./route/home";
import Product from "./route/product";

export default () => {
  let location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname}
        classNames='fade'
        timeout={300}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />}>
            <Route path="house" />
            <Route path="apartment" />
          </Route>
        </Routes>
      </CSSTransition>
      </TransitionGroup>
  )
}