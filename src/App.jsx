import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ProductList from "./components/Products/ProductList.jsx";
import Product from "./components/Products/Product.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    return (
        <Router>
            <div className="dark:bg-slate-900 max-h-[100%] font-ubuntu pb-11">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <ProductList />
                            </>
                        }
                    />
                    <Route path="/product/:productId" element={<Product />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
