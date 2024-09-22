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

// Endpoint to get all product categories
router.get("/", async (req, res) => {
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
router.get("/:id", async (req, res) => {
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

// Endpoint to get specific product by Category ID
router.get("/products/:id", async (req, res) => {
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

export default router; // Export the router
