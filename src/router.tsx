import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./App.css";

import Home from "./route/home";
import Product from "./route/product";
import NotFound from "./route/404";

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
          <Route path="/404" element={<NotFound />} />
          <Route path="product" element={<Product />}>
            <Route path="house" />
            <Route path="apartment" />
          </Route>
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </CSSTransition>
      </TransitionGroup>
  )
}