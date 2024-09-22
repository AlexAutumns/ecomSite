import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom"; // Ensure this is included

import { FaStar } from "react-icons/fa6";

import { useLocation, useNavigate } from "react-router-dom";

// placeholders
const image_placeholder =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.invisus.com%2Fwp-content%2Fuploads%2Fplaceholder-icon-yellow.png&f=1&nofb=1&ipt=0ad701616a0c0be926fbaa9311d848b40607da30a9fee56b999ee117dff8c87d&ipo=images";
const name_placeholder = "THIS IS A PRODUCT NAME";
const desc_placeholder = "THIS IS A PRODUCT DESCRIPTION";
const price_placeholder = "THIS IS A PRODUCT PRICE";
const rating_placeholder = 4.5;

const SearchResults = () => {
    // Search Query Stuff ===========================
    const location = useLocation();
    const navigate = useNavigate();

    // Create a URLSearchParams object from the query string
    const queryParams = new URLSearchParams(location.search);

    // Extract parameters from the URL
    const productName = queryParams.get("product_name") || "";
    const productDesc = queryParams.get("product_desc") || "";
    const categoryId = parseInt(queryParams.get("category_id")) || 0; // Ensure it's a number
    const userId = parseInt(queryParams.get("user_id")) || 0; // Ensure it's a number
    const minPrice = queryParams.get("min_price") || "";
    const maxPrice = queryParams.get("max_price") || "";

    // State to manage search parameters
    const [searchParams, setSearchParams] = useState({
        product_name: productName,
        product_desc: productDesc,
        category_id: categoryId,
        user_id: userId,
        min_price: minPrice,
        max_price: maxPrice,
    });

    // Update searchParams state when URL changes
    useEffect(() => {
        setSearchParams({
            product_name: productName,
            product_desc: productDesc,
            category_id: categoryId,
            user_id: userId,
            min_price: minPrice,
            max_price: maxPrice,
        });
    }, [productName, productDesc, categoryId, userId, minPrice, maxPrice]);

    // Function to handle filter changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedParams = {
            ...searchParams,
            [name]: value,
        };
        setSearchParams(updatedParams);

        // Update the URL
        updateURL(updatedParams);
    };

    // Function to update the URL based on the current searchParams
    const updateURL = (params) => {
        const newParams = new URLSearchParams();

        // Add parameters conditionally
        if (params.product_name) {
            newParams.set("product_name", params.product_name);
        }
        if (params.product_desc) {
            newParams.set("product_desc", params.product_desc);
        }
        if (params.category_id && params.category_id != 0) {
            newParams.set("category_id", params.category_id); // Only add if not '0'
        }
        if (params.user_id && params.user_id !== 0) {
            newParams.set("user_id", params.user_id); // Fix typo here
        }
        if (params.min_price) newParams.set("min_price", params.min_price);
        if (params.max_price) newParams.set("max_price", params.max_price);

        navigate(`/search?${newParams.toString()}`);
    };

    // =============================================

    // FETCHES ==========================
    const [error, setError] = useState(null); // State for error handling
    const [loading, setLoading] = useState(true); // State for loading

    // CATEGORIES ----------------------
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/categories"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                setError(error);
                console.error("Error fetching categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    // PRODUCTS -----------------------
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let response;
                // Search by Name (Default)
                if (
                    productName != "" &&
                    categoryId == 0 &&
                    minPrice == "" &&
                    maxPrice == ""
                ) {
                    response = await fetch(
                        `http://localhost:5000/api/products/search/name/${productName}`
                    );
                }

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error);
                console.error("Error fetching products: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [productName, categoryId, minPrice, maxPrice]);

    // Images ------------------
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            setError(null);

            try {
                const imageResponse = await fetch(
                    "http://localhost:5000/api/images"
                );
                if (!imageResponse.ok) {
                    throw new Error("Network response was not ok for images");
                }
                const imageData = await imageResponse.json();
                setImages(imageData);
            } catch (error) {
                setError(error);
                console.error("Error fetching images:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [products]); // This runs only once on component mount

    // Reviews --------------------------
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            setLoading(true);
            setError(null);

            try {
                const reviewResponse = await fetch(
                    "http://localhost:5000/api/reviews"
                );
                if (!reviewResponse.ok) {
                    throw new Error("Network response was not ok for reviews");
                }
                const reviewData = await reviewResponse.json();
                setReviews(reviewData);
            } catch (error) {
                setError(error);
                console.error("Error fetching reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [products]); // This runs only once on component mount

    // Matching Reviews and Images to Products -----------------------
    const [vProducts, setVProducts] = useState([]);
    const matchProductsToImagesAndReviews = (products, images, reviews) => {
        return products.map((product) => {
            // Filter images and reviews for the current product
            const productImages = images.filter(
                (image) => image.product_id === product.id
            );
            const productReviews = reviews.filter(
                (review) => review.product_id === product.id
            );

            // Calculate average rating
            let averageReview = 0;
            if (productReviews.length > 0) {
                const totalRating = productReviews.reduce((sum, review) => {
                    const rating = parseFloat(review.rating);
                    return !isNaN(rating) ? sum + rating : sum; // Validate rating
                }, 0);
                averageReview = (totalRating / productReviews.length).toFixed(
                    1
                ); // Round to 2 decimal points
            }

            // Return the product with matched images and reviews
            return {
                ...product,
                images: productImages,
                reviews: productReviews,
                averageReviews: parseFloat(averageReview), // Convert back to number if needed
            };
        });
    };

    useEffect(() => {
        if (products.length > 0 && images.length > 0 && reviews.length > 0) {
            const matchedProducts = matchProductsToImagesAndReviews(
                products,
                images,
                reviews
            );
            setVProducts(matchedProducts);
        }
    }, [products, images, reviews]);

    // console.log("Categories: ", categories);
    // console.log("Products: ", products);
    // console.log("Images: ", images);
    // console.log("Reviews: ", reviews);
    console.log("ALL: ", vProducts);

    // =====================================

    if (loading) {
        return <div>Loading...</div>; // Display loading state
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Display error state
    }

    return (
        <div className="flex justify-evenly mt-14 ">
            <div
                className="
            rounded-lg
            flex flex-col
            w-[19%]
            mb-12 py-4 pb-6 mx-4 px-4
            dark:bg-slate-500"
            >
                <h2 className="text-2xl font-bold dark:text-white">Filters</h2>
                <form className="flex flex-col justify-evenly px-2">
                    <label className="flex flex-col justify-evenly my-2 dark:text-white">
                        Category
                        <select
                            name="category_id"
                            value={searchParams.category_id}
                            className="dark:bg-slate-700"
                            onChange={handleFilterChange}
                        >
                            <option value={0}>Select Category</option>
                            {categories.map((category) => (
                                <option value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label className="flex flex-col justify-evenly my-2 dark:text-white">
                        Min Price (USD)
                        <input
                            type="number"
                            name="min_price"
                            className="dark:bg-slate-700"
                            value={searchParams.min_price}
                            onChange={handleFilterChange}
                        />
                    </label>
                    <label className="flex flex-col justify-evenly my-2 dark:text-white">
                        Max Price (USD)
                        <input
                            type="number"
                            name="max_price"
                            className="dark:bg-slate-700"
                            value={searchParams.max_price}
                            onChange={handleFilterChange}
                        />
                    </label>
                </form>
            </div>
            <div
                className="
                rounded-lg
                w-[79%]
                mb-12 py-4 pb-6 mx-4 px-4
                dark:bg-slate-500"
            >
                {/* products list */}
                <div className="container">
                    <div className="text-center mb-10 max-w-[600px] mx-auto">
                        <h1 className="text-3xl font-bold dark:text-white">
                            Search Results
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {vProducts.map((product) => (
                            <div
                                key={product.id}
                                className="space-y-4 rounded-md py-1 px-1 shadow-md hover:shadow-lg hover:scale-105 dark:bg-gray-200  transition-all ease-in-out "
                            >
                                <Link to={`/product/${product.id}`}>
                                    <img
                                        src={
                                            product.images[0].image_html
                                                ? product.images[0].image_html
                                                : image_placeholder
                                        }
                                        alt={
                                            product.product_name
                                                ? product.product_name
                                                : name_placeholder
                                        }
                                        className="h-[220px] w-[150px] object-cover rounded-md"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {product.product_name
                                                ? product.product_name
                                                : name_placeholder}
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            $
                                            {product.price
                                                ? product.price
                                                : price_placeholder}
                                        </p>
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-yellow-400" />
                                            <span>
                                                {product.averageReviews
                                                    ? product.averageReviews
                                                    : rating_placeholder}
                                            </span>
                                        </div>
                                        <p className="text-blue-500 text-sm">
                                            {product.status
                                                ? product.status.toUpperCase()
                                                : "UNAVAILABLE"}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;
