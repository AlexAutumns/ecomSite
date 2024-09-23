import { Router } from "express";

import pkg from "pg"; // Import the pg module as a default import
const { Client } = pkg; // Correctly import the Client class

const router = Router();

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

router.get("/", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM reviews;");
        const reviewList = result.rows.map((row) => ({
            id: row.id,
            user_id: row.user_id,
            product_id: row.product_id,
            rating: row.rating,
            review_desc: row.review_desc,
            created_at: row.created_at,
            is_anonymous: row.is_anonymous,
        }));
        res.json(reviewList);
    } catch (err) {
        console.error("Error fetching images:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

// Endpoint to get reviews for a specific product by product ID
router.get("/:productId", async (req, res) => {
    const { productId } = req.params; // Extract productId from the path

    try {
        // Query the database for reviews associated with the specific product ID
        const result = await client.query(
            "SELECT * FROM reviews WHERE product_id = $1", // Use parameterized query
            [productId] // Pass the productId to the query
        );

        const reviewList = result.rows.map((row) => ({
            id: row.id,
            user_id: row.user_id,
            product_id: row.product_id,
            rating: row.rating,
            review_desc: row.review_desc,
            created_at: row.created_at,
            is_anonymous: row.is_anonymous,
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

export default router; // Export the router
