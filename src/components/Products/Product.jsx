import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { FaStar } from "react-icons/fa6";

import userDefault from "../../assets/userDefault.svg"

const Product = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState(null);
    const [images, setImages] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [averageReview, setAverageReview] = useState(0);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!productId) return; // Avoid fetching if productId is not valid
            try {
                const [productResponse, imagesResponse, reviewsResponse] =
                    await Promise.all([
                        fetch(
                            `http://localhost:5000/api/products/${productId}`
                        ),
                        fetch(`http://localhost:5000/api/images/${productId}`),
                        fetch(`http://localhost:5000/api/reviews/${productId}`),
                    ]);
                if (
                    !productResponse.ok ||
                    !imagesResponse.ok ||
                    !reviewsResponse.ok
                ) {
                    throw new Error("Network response was not ok");
                }
                const productData = await productResponse.json();
                const imagesData = await imagesResponse.json();
                const reviewsData = await reviewsResponse.json();
                setProduct(productData[0]);
                setImages(imagesData);
                setReviews(reviewsData);
            } catch (error) {
                setError(error);
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [productId]);

    const getAverageReviews = (productReviews) => {
        if (productReviews.length > 0) {
            const totalRating = productReviews.reduce((sum, review) => {
                const rating = parseFloat(review.rating);
                return !isNaN(rating) ? sum + rating : sum; // Validate rating
            }, 0);
            return (totalRating / productReviews.length).toFixed(2); // Round to 2 decimal points
        }
    };

    useEffect(() => {
        const r = getAverageReviews(reviews);
        setAverageReview(r);
    }, [product]);

    console.log("PRODUCT: ", product);
    console.log("IMAGES: ", images);
    console.log("REVIEWS: ", reviews);
    console.log("AVERAGE REVIEW: ", averageReview);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {product ? (
                <div>
                    <div
                        id="main"
                        className="mt-14 mb-12 shadow-md min-h-[500px] dark:bg-slate-400 my-4 py-7 px-6 flex justify-evenly items-center"
                    >
                        <img
                            src={images[0].image_html}
                            alt={images[0].image_desc}
                            className="max-w-[30%] rounded-xl shadow-lg"
                        />

                        <div id="description" className="flex flex-col">
                            <h1 className=" text-5xl">
                                {product.product_name}
                            </h1>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <FaStar className="text-yellow-300" />
                                    <p>{averageReview}</p>
                                </div>

                                <a
                                    href="#reviews"
                                    className="text-[0.85rem] mx-4 dark:text-yellow-200 text-yellow-500"
                                >
                                    {reviews.length} ratings
                                </a>
                            </div>

                            <div className="text-lg py-10 my-4 flex justify-evenly flex-col">
                                <p className="font-bold text-[1.4rem]">
                                    Price: ${product.price}
                                </p>
                                <div>
                                    <hr className="my-2" />
                                    <h2 className="font-bold text-[1.1rem]">
                                        ABOUT THIS PRODUCT
                                    </h2>
                                    <p className="text-[0.9rem]">
                                        {product.product_desc}
                                    </p>
                                    <hr className="my-2" />
                                </div>
                                <p>Stock Quantity: {product.stock_quantity}</p>
                                <p className="text-blue-300 dark:text-blue-600">{String(product.status).toUpperCase()}</p>

                            </div>
                        </div>
                    </div>

                    <div
                        id="reviews"
                        className="dark:bg-slate-400 dark:text-white  px-5 flex flex-col py-6"
                    >
                        <div>
                            
                            <h1 className="text-[1.5rem] font-bold">
                                Customer Reviews
                            </h1>
                        </div>

                        <hr />

                        <ul className="px-9 py-3 flex flex-col">
                            {reviews.map((review) => (
                                <li
                                    key={review.id}
                                    className="shadow-md my-3 py-3 px-4 bg-gray-100 dark:bg-slate-700 dark:text-white rounded-md
                                    transition-all ease-in-out hover:scale-[1.015]"
                                >
                                    <div className="flex items-center mb-3">
                                        <img src={userDefault} alt="" className="w-7 mr-2 dark:text-white text-black" />
                                        <h2 className="font-bold text-[1.1rem]">Anonymous</h2>
                                        <div className="flex items-center justify-center mx-4">
                                            <FaStar className="text-yellow-300" />
                                            <p>{review.rating}</p>
                                        </div>
                                    </div>

                                    <p>{review.review_desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div>Product not found</div>
            )}
        </div>
    );
};

export default Product;
