import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom"; // Ensure this is included

import { FaStar } from "react-icons/fa6";
const name_placeholder = "THIS IS A PRODUCT NAME";
const desc_placeholder = "THIS IS A PRODUCT DESCRIPTION";
const price_placeholder = "THIS IS A PRODUCT PRICE";
const rating_placeholder = 4.5;

import userDefault from "../../assets/userDefault.svg";

const Product = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState(null);
    const [images, setImages] = useState([]);
    const [reviews, setReviews] = useState([]);

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

    const [averageReview, setAverageReview] = useState(0);
    const [selectedImage, setSelectedImage] = useState({});

    useEffect(() => {
        const setDefaultImage = async () => {
            if (!images) return setSelectedImage({});
            if (!images[0]) return setSelectedImage({});
            try {
                setSelectedImage(images[0]);
            } catch (error) {
                setError(error);
                console.error("Error setting default image", error);
            } finally {
                setLoading(false);
            }
        };

        setDefaultImage();
    }, [images]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
    console.log("SELECTED IMAGE: ", selectedImage);
    console.log("REVIEWS: ", reviews);
    console.log("AVERAGE REVIEW: ", averageReview);

    const handleClickMiniImage = (image) => {
        if (image != selectedImage) {
            setSelectedImage(image);
            console.log("SET SELECTED IMAGE TO: ", image);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            {product ? (
                <div>
                    <div
                        id="main"
                        className="mt-14 mb-12 shadow-md min-h-[500px] dark:bg-slate-400 my-4 py-7 px-6 flex justify-center"
                    >
                        <div className="flex flex-col mx-3 justify-self-center w-[50%] justify-center">
                            <img
                                src={selectedImage.image_html}
                                alt={selectedImage.image_desc}
                                className="max-w-[60%] rounded-xl shadow-lg"
                            />

                            <ul className="m-2 my-6 p-0 flex justify-center items-center">
                                {images.map((image) => (
                                    <li key={image.id}>
                                        <img
                                            src={image.image_html}
                                            alt=""
                                            className="max-w-[6.5%] shadow-md rounded-xl mx-2 transition-all ease-in-out hover:border-blue-400"
                                            onClick={() =>
                                                handleClickMiniImage(image)
                                            } // Attach click event
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div
                            id="description"
                            className="flex flex-col min-h-[100%] m-0 justify-center"
                        >
                            <div>
                                <h1 className=" text-5xl">
                                    {product.product_name}
                                </h1>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <FaStar className="text-yellow-300 mr-1" />
                                        <p>{averageReview}</p>
                                    </div>

                                    <a
                                        href="#reviews"
                                        className="text-[0.85rem] mx-5 dark:text-yellow-200 text-yellow-500"
                                    >
                                        {reviews.length} ratings
                                    </a>
                                </div>
                            </div>

                            <p className="font-bold text-[1.4rem]">
                                Price: ${product.price}
                            </p>

                            <div className="text-lg py-10 my-4 flex justify-evenly flex-col min-h-[50%]">
                                <div className="flex flex-col justify-evenly min-h-[70%]">
                                    <hr className="my-2" />
                                    <h2 className="font-bold text-[1.2rem]">
                                        ABOUT THIS PRODUCT
                                    </h2>
                                    <p className="text-[0.9rem]">
                                        {product.product_desc}
                                    </p>
                                    <hr className="my-2" />
                                </div>
                                <p>Stock Quantity: {product.stock_quantity}</p>
                                <p className="text-blue-300 dark:text-blue-600">
                                    {String(product.status).toUpperCase()}
                                </p>
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
                                        <img
                                            src={userDefault}
                                            alt=""
                                            className="w-7 mr-2 dark:text-white text-black"
                                        />
                                        <h2 className="font-bold text-[1.1rem]">
                                            <Link to={`/product/${product.id}`}>
                                                Anonymous
                                            </Link>
                                        </h2>
                                        <div className="flex items-center justify-center mx-4">
                                            <FaStar className="text-yellow-300 mr-1" />
                                            <p>{review.rating}</p>
                                        </div>
                                    </div>

                                    <p>{review.review_desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div id="products"
                    ></div>
                </div>
            ) : (
                <div>Product not found</div>
            )}
        </div>
    );
};

export default Product;
