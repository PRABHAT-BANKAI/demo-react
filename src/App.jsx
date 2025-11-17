import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/features" element={<h1>Features Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </div>
  );
};

export default App;
