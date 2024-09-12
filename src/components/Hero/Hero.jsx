import React, { useEffect, useState } from "react";

import Slider from "react-slick";

// placeholders
const image_placeholder =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.invisus.com%2Fwp-content%2Fuploads%2Fplaceholder-icon-yellow.png&f=1&nofb=1&ipt=0ad701616a0c0be926fbaa9311d848b40607da30a9fee56b999ee117dff8c87d&ipo=images";
const name_placeholder = "THIS IS A PRODUCT NAME";
const desc_placeholder = "THIS IS A PRODUCT DESCRIPTION";
const price_placeholder = "THIS IS A PRODUCT PRICE";
const rating_placeholder = 4.5;

const Hero = () => {
    // slider settings
    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 700,
        slideToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                console.log(data);
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

    const [images, setImages] = useState([]);

    // fetch images from the api
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
                console.log(data);
                setImages(data);
            } catch (error) {
                setError(error);
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, [products]);

    function getRandomItems(arr, count) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    let featuredList = getRandomItems(products, 4); // make it change it regularly

    // match images to products
    /*matchProductsToImages() returns something like this:
    [{
        "id": 1,
        "product_name": "Smartphone X",
        "product_desc": "Latest model with high-resolution camera and long battery life. (THIS IS AN EXAMPLE)",
        "price": "799.99",
        "category_id": 1,
        "stock_quantity": 50,
        "created_at": "2024-09-02T23:44:41.020Z",
        "user_id": null,
        "status": "available",
        "images": [
            {
                "id": 13,
                "product_id": 1,
                "image_html": "https://cdn-gx-aria-media.osp.opera.software/images/7dacf67b-6b03-11ef-bc07-dbb94711550a/1725484883019/sample_0.jpg",
                "image_desc": "An image of Smartphone X (THIS IS AN EXAMPLE)"
            }
        ]
    },]
    */
    function matchProductsToImages(products, images) {
        return products.map((product) => {
            // Filter images that match the current product's id
            const productImages = images.filter(
                (image) => image.product_id === product.id
            );
            // Return the product along with its images
            return {
                ...product,
                images: productImages,
            };
        });
    }
    featuredList = matchProductsToImages(featuredList, images);

    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-50 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
            {/* background pattern */}

            <div className="h-[700px] w-[700px] bg-third_color/30 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>

            {/* hero section */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {featuredList.map((data) => (
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {/* text content */}

                                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 order-2 sm:text-left text-center sm:order-1 relative z-10">
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                        {data.product_name
                                            ? data.product_name
                                            : name_placeholder}
                                    </h1>
                                    <p className="text-sm">
                                        {data.product_desc
                                            ? data.product_desc
                                            : desc_placeholder}
                                    </p>

                                    <div>
                                        <button className=" bg-gradient-to-r from-third_color to-fifth_color hover:scale-105 duration-300 text-white py-1.5 px-3 rounded-full translate-x-2">
                                            Order Now
                                        </button>
                                    </div>
                                </div>

                                {/* image section */}
                                <div className="order-1 sm:order-2">
                                    <div className="relative z-10 flex justify-center items-center">
                                        <img
                                            src={
                                                data.images[0].image_html
                                                    ? data.images[0].image_html
                                                    : image_placeholder
                                            }
                                            alt={
                                                data.product_name
                                                    ? data.product_name
                                                    : name_placeholder
                                            }
                                            className="w-[300px] sm:h-[450] sm:w-[450px] sm:scale-105 object-contain mx-auto lg:scale-120 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;
