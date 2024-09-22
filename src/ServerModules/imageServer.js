
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
router.get("/:productId", async (req, res) => {
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


export default router; // Export the router