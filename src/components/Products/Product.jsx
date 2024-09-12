import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const { productId } = useParams();
    console.log("Product component rendered with ID:", productId);

    const [product, setProduct] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/products/${productId}`
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                // If the API returns an array, set the first item
                setProduct(data[0]); // Adjust based on your API response structure
            } catch (error) {
                setError(error);
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/images"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setImages(data);
            } catch (error) {
                setError(error);
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="mt-14 mb-12 dark:bg-slate-400 py-6 flex justify-center items-center">
            {product ? (
                <div>
                    <h1>HUGE SUCCESS!</h1>
                    <p>Loaded product with id {productId}</p>
                    <h2>{product.product_name}</h2>
                    <p>{product.product_desc}</p>
                    <p>Price: ${product.price}</p>
                    <p>Stock Quantity: {product.stock_quantity}</p>
                    {/* Add more product details as needed */}
                </div>
            ) : (
                <div>Product not found</div>
            )}
        </div>
    );
};

export default Product;
