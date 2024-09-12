import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom"; // Ensure this is included

import { FaStar } from "react-icons/fa6";

// placeholders
const image_placeholder =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.invisus.com%2Fwp-content%2Fuploads%2Fplaceholder-icon-yellow.png&f=1&nofb=1&ipt=0ad701616a0c0be926fbaa9311d848b40607da30a9fee56b999ee117dff8c87d&ipo=images";
const name_placeholder = "THIS IS A PRODUCT NAME";
const desc_placeholder = "THIS IS A PRODUCT DESCRIPTION";
const price_placeholder = "THIS IS A PRODUCT PRICE";
const rating_placeholder = 4.5;

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [vProducts, setVProducts] = useState([]);

    // Fetch product data from the API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/products"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error);
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Fetch images from the API
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
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    // Match products to images once both are loaded
    useEffect(() => {
        if (products.length > 0 && images.length > 0) {
            const matchedProducts = matchProductsToImages(products, images);
            setVProducts(matchedProducts);
        }
    }, [products, images]);

    const matchProductsToImages = (products, images) => {
        return products.map((product) => {
            const productImages = images.filter(
                (image) => image.product_id === product.id
            );
            return {
                ...product,
                images: productImages,
            };
        });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="mt-14 mb-12 dark:bg-slate-500 py-4 pb-6">
            {/* products list */}
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <h1 className="text-3xl font-bold dark:text-white">
                        Products
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                    {vProducts.map((product) => (
                        <div
                            key={product.id}
                            className="space-y-4 rounded-md py-1 px-1 shadow-sm hover:shadow-lg hover:scale-105 dark:bg-gray-200"
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
                                            {product.rating
                                                ? product.rating
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
    );
};

export default ProductList;
