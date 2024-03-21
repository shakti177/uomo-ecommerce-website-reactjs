import React from "react";
// import MainSlider from "./Components/Slider/MainSlider";
// import Sliderfade from "./Components/Slider/Sliderfade";
// import Staticslider from "./Components/Slider/Staticslider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Shop from "../src/Pages/Shop";
import Contact from "../src/Pages/Contact";
import Blog from "../src/Pages/Blog";
import Header from "../src/Components/Header/Navbar";
import Footer from "../src/Components/Footer/Footer";
// import Slider from "./Components/Slider/Slider";

import "./App.css";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Slider />
      <Sliderfade />
      <Staticslider />
      <MainSlider /> */}
    </div>
  );
};

export default App;
