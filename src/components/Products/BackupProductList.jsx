    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // // Fetch product data from the API
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await fetch(
    //                 "http://localhost:5000/api/products"
    //             );
    //             if (!response.ok) {
    //                 throw new Error("Network response was not ok");
    //             }
    //             const data = await response.json();
    //             console.log(data);
    //             setProducts(data);
    //         } catch (error) {
    //             setError(error);
    //             console.error("Error fetching products:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchProducts();
    // }, []);

    // const [images, setImages] = useState([]);

    // // fetch images from the api
    // useEffect(() => {
    //     const fetchImages = async () => {
    //         try {
    //             const response = await fetch(
    //                 "http://localhost:5000/api/images"
    //             );
    //             if (!response.ok) {
    //                 throw new Error("Network response was not ok");
    //             }
    //             const data = await response.json();
    //             console.log(data);
    //             setImages(data);
    //         } catch (error) {
    //             setError(error);
    //             console.error("Error fetching products:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchImages();
    // }, [products]);

    // // match images to products
    // /*matchProductsToImages() returns something like this:
    // [{
    //     "id": 1,
    //     "product_name": "Smartphone X",
    //     "product_desc": "Latest model with high-resolution camera and long battery life. (THIS IS AN EXAMPLE)",
    //     "price": "799.99",
    //     "category_id": 1,
    //     "stock_quantity": 50,
    //     "created_at": "2024-09-02T23:44:41.020Z",
    //     "user_id": null,
    //     "status": "available",
    //     "images": [
    //         {
    //             "id": 13,
    //             "product_id": 1,
    //             "image_html": "https://cdn-gx-aria-media.osp.opera.software/images/7dacf67b-6b03-11ef-bc07-dbb94711550a/1725484883019/sample_0.jpg",
    //             "image_desc": "An image of Smartphone X (THIS IS AN EXAMPLE)"
    //         }
    //     ]
    // },]
    // */
    // function matchProductsToImages(products, images) {
    //     return products.map((product) => {
    //         // Filter images that match the current product's id
    //         const productImages = images.filter(
    //             (image) => image.product_id === product.id
    //         );
    //         // Return the product along with its images
    //         return {
    //             ...product,
    //             images: productImages,
    //         };
    //     });
    // }
    // const vProducts = matchProductsToImages(products, images)

    // // Render loading, error, or product list
    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }