import express from "express";
import cors from "cors";

import pkg from "pg"; // Import the pg module as a default import

const { Client } = pkg; // Destructure to get the Client class

const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQL connection configuration
const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "ecom",
    password: "postgres",
    port: 5432,
});

// Connect to the database
client.connect();
app.use(cors());

// ======================================================================================================================
// GET SECTION
// -----------------------------------------------------------------------------------------------

// Root route
app.get("/", (req, res) => {
    res.send(
        "Welcome to the Product API! Use /api/products to get the product list."
    );
});

//
// USER STUFF
//

// Endpoint to get users
app.get("/api/users", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM users;");
        const userList = result.rows.map((row) => ({
            id: row.id,
            username: row.username,
            email: row.email,
            user_pic_url: row.user_pic_url,
            joined_at: row.joined_at,
            is_deleted: row.is_deleted,
        }));
        res.json(userList);
    } catch (err) {
        console.error("Error fetching products:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

//
// CART STUFF
//

// Endpoint to get all carts
app.get("/api/carts", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM carts;");
        const cartsList = result.rows.map((row) => ({
            id: row.id,
            user_id: row.user_id,
            created_at: row.created_at,
            updated_at: row.updated_at,
        }));
        res.json(cartsList);
    } catch (err) {
        console.error("Error fetching products:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint to get cart items
app.get("/api/cart-items", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM cart_items;");
        const cartsList = result.rows.map((row) => ({
            id: row.id,
            user_id: row.user_id,
            created_at: row.created_at,
            updated_at: row.updated_at,
        }));
        res.json(cartsList);
    } catch (err) {
        console.error("Error fetching products:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

//
// WISHLIST STUFF
//

// Endpoint to get all wishlists
app.get("/api/wishlists", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM wishlists;");
        const wishlistList = result.rows.map((row) => ({
            id: row.id,
            user_id: row.user_id,
            created_at: row.created_at,
        }));
        res.json(wishlistList);
    } catch (err) {
        console.error("Error fetching products:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint to get wishlist items
app.get("/api/wishlist-items", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM wishlist_items;");
        const wishlistList = result.rows.map((row) => ({
            id: row.id,
            wishlist_id: row.wishlist_id,
            product_id: row.product_id,
            created_at: row.created_at,
        }));
        res.json(wishlistList);
    } catch (err) {
        console.error("Error fetching products:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

//
// ORDER STUFF
//

// Endpoint to get orders
app.get("/api/orders", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM orders;");
        const ordersList = result.rows.map((row) => ({
            id: row.id,
            user_id: row.user_id,
            order_date: row.order_date,
            status: row.status,
            created_at: row.created_at,
            total_price: row.total_price,
            tracking_number: row.tracking_number,
        }));
        res.json(ordersList);
    } catch (err) {
        console.error("Error fetching products:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint to get order items
app.get("/api/order-items", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM order_items;");
        const ordersList = result.rows.map((row) => ({
            id: row.id,
            order_id: row.order_id,
            product_id: row.product_id,
            quantity: row.quantity,
            price: row.price,
            created_at: row.created_at,
        }));
        res.json(ordersList);
    } catch (err) {
        console.error("Error fetching products:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

//
// PRODUCT STUFF
//

// Endpoint to get all product categories
app.get("/api/categories", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM categories;");
        const categoriesList = result.rows.map((row) => ({
            id: row.id,
            name: row.name,
            category_desc: row.category_desc,
            is_deleted: row.is_deleted,
        }));
        res.json(categoriesList);
    } catch (err) {
        console.error("Error fetching categories:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint to get products by categories
app.get("/api/categories/:id", async (req, res) => {
    const { id } = req.params; // Extract the id from the path
    try {
        // Query the database for the specific product
        const result = await client.query(
            "SELECT * FROM categories WHERE id = $1", // Use parameterized query
            [id] // Pass the ID to the query
        );
        const categoriesList = result.rows.map((row) => ({
            id: row.id,
            name: row.name,
            category_desc: row.category_desc,
            is_deleted: row.is_deleted,
        }));
        res.json(categoriesList);
    } catch (err) {
        console.error("Error fetching category:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint to get all products
app.get("/api/products", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM products;");
        const productList = result.rows.map((row) => ({
            id: row.id,
            product_name: row.product_name,
            product_desc: row.product_desc,
            price: row.price,
            category_id: row.category_id,
            stock_quantity: row.stock_quantity,
            created_at: row.created_at,
            user_id: row.user_id,
            status: row.status,
        }));
        res.json(productList);
    } catch (err) {
        console.error("Error fetching products:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint to get specific product by ID
app.get("/api/products/:id", async (req, res) => {
    const { id } = req.params; // Extract the id from the path

    try {
        // Query the database for the specific product
        const result = await client.query(
            "SELECT * FROM products WHERE id = $1", // Use parameterized query
            [id] // Pass the ID to the query
        );

        const productList = result.rows.map((row) => ({
            id: row.id,
            product_name: row.product_name,
            product_desc: row.product_desc,
            price: row.price,
            category_id: row.category_id,
            stock_quantity: row.stock_quantity,
            created_at: row.created_at,
            user_id: row.user_id,
            status: row.status,
        }));

        // Check if any products were found
        if (productList.length > 0) {
            res.json(productList); // Return found products as JSON
        } else {
            res.status(404).send("No product found with the given ID"); // Handle not found
        }
    } catch (err) {
        console.error("Error fetching specific product:", err.stack);
        res.status(500).send("Internal Server Error"); // Handle internal error
    }
});

// Endpoint to get specific product by Category ID
app.get("/api/categories/products/:id", async (req, res) => {
    const { id } = req.params; // Extract the id from the path

    try {
        // Query the database for the specific product
        const result = await client.query(
            "SELECT * FROM products WHERE category_id = $1", // Use parameterized query
            [id] // Pass the ID to the query
        );

        const productList = result.rows.map((row) => ({
            id: row.id,
            product_name: row.product_name,
            product_desc: row.product_desc,
            price: row.price,
            category_id: row.category_id,
            stock_quantity: row.stock_quantity,
            created_at: row.created_at,
            user_id: row.user_id,
            status: row.status,
        }));

        // Check if any products were found
        if (productList.length > 0) {
            res.json(productList); // Return found products as JSON
        } else {
            res.status(404).send("No category found with the given ID"); // Handle not found
        }
    } catch (err) {
        console.error("Error fetching category's products:", err.stack);
        res.status(500).send("Internal Server Error"); // Handle internal error
    }
});

// Endpoint to Get images
app.get("/api/images", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM images;");
        const imageList = result.rows.map((row) => ({
            id: row.id,
            product_id: row.product_id,
            image_html: row.image_html,
            image_desc: row.image_desc,
        }));
        res.json(imageList);
    } catch (err) {
        console.error("Error fetching images:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint to get images for a specific product by product ID
app.get("/api/images/:productId", async (req, res) => {
    const { productId } = req.params; // Extract productId from the path

    try {
        // Query the database for images associated with the specific product ID
        const result = await client.query(
            "SELECT * FROM images WHERE product_id = $1", // Use parameterized query
            [productId] // Pass the productId to the query
        );

        const imageList = result.rows.map((row) => ({
            id: row.id,
            product_id: row.product_id,
            image_html: row.image_html,
            image_desc: row.image_desc,
        }));

        // Check if any images were found
        if (imageList.length > 0) {
            res.json(imageList); // Return found images as JSON
        } else {
            res.status(404).send("No images found for the given product ID"); // Handle not found
        }
    } catch (err) {
        console.error("Error fetching images:", err.stack);
        res.status(500).send("Internal Server Error"); // Handle internal error
    }
});

// Endpoint to Get Reviews
app.get("/api/reviews", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM reviews;");
        const reviewList = result.rows.map((row) => ({
            id: row.id,
            product_id: row.product_id,
            rating: row.rating,
            review_desc: row.review_desc,
            created_at: row.created_at,
        }));
        res.json(reviewList);
    } catch (err) {
        console.error("Error fetching images:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint to get reviews for a specific product by product ID
app.get("/api/reviews/:productId", async (req, res) => {
    const { productId } = req.params; // Extract productId from the path

    try {
        // Query the database for reviews associated with the specific product ID
        const result = await client.query(
            "SELECT * FROM reviews WHERE product_id = $1", // Use parameterized query
            [productId] // Pass the productId to the query
        );

        const reviewList = result.rows.map((row) => ({
            id: row.id,
            product_id: row.product_id,
            rating: row.rating,
            review_desc: row.review_desc,
            created_at: row.created_at,
        }));

        // Check if any reviews were found
        if (reviewList.length > 0) {
            res.json(reviewList); // Return found reviews as JSON
        } else {
            res.status(404).send("No reviews found for the given product ID"); // Handle not found
        }
    } catch (err) {
        console.error("Error fetching reviews:", err.stack);
        res.status(500).send("Internal Server Error"); // Handle internal error
    }
});

// -----------------------------------------------------------------------------------------------
// GET SECTION
// ========================================================================================================================

// ======================================================================================================================
// SET SECTION
// -----------------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------------
// SET SECTION
// ========================================================================================================================

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
