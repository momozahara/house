import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import './route.css';

import House from "./product/house";
import Apartment from "./product/apartment";

export default () => {
  return (
    <Container>
      <div className="text-center">
        <Link to="/product/house"><Button variant="dark" style={{ marginRight: "1rem", width: "5rem" }}>House</Button ></Link>
        <Link to="/product/apartment"><Button variant="dark" style={{ width: "5rem" }}>Apartment</Button ></Link>
      </div>
      <Routes>
        <Route path="/" element={<Navigate replace to="house" />} />
        <Route path="house" element={<House />} />
        <Route path="apartment" element={<Apartment />} />
      </Routes>
    </Container>
  )
}