import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar.jsx";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton.jsx";

import SearchResults from "./components/Search/SearchResults.jsx";

import Hero from "./components/Hero/Hero.jsx";

import ProductList from "./components/Products/ProductList.jsx";
import Product from "./components/Products/Product.jsx";

import Categories from "./components/Categories/Categories.jsx";
import Category from "./components/Categories/Category.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    return (
        <Router>
            <div className="dark:bg-slate-900 min-h-[100vh] font-ubuntu pt-1">
                <Navbar />

                <div className="mt-[7%]">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div>
                                    <Hero />
                                    <ProductList />
                                </div>
                            }
                        />
                        <Route // Route to specific Product
                            path="/product/:productId"
                            element={<Product />}
                        />
                        <Route // Route to categories
                            path="/categories"
                            element={<Categories />}
                        />
                        <Route // Route to list of Products of a Category
                            path="/categories/:categoryId"
                            element={<Category />}
                        />
                        <Route path="/search" element={<SearchResults />} />
                    </Routes>
                </div>

                <BackToTopButton />
            </div>
        </Router>
    );
};

export default App;
