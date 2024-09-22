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

// Endpoint to get all products
router.get("/", async (req, res) => {
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
router.get("/:id", async (req, res) => {
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

// Endpoint to get products by search
router.get("/search/:col/:search_query", async (req, res) => {
    const allowedColumns = ["name", "desc", "price", "category", "user_id"];
    const { col, search_query } = req.params;

    // Validate the column name
    if (!allowedColumns.includes(col)) {
        return res.status(400).send("Invalid column name");
    }

    try {
        let result;

        // Search by Name
        if (col.toLowerCase() === "name") {
            result = await client.query(
                `SELECT * FROM products WHERE product_name ILIKE $1`,
                [`%${search_query}%`] // Use search_query for the wildcard search
            );
        }
        // Search by words in description
        else if (col.toLowerCase() === "desc") {
            result = await client.query(
                `SELECT * FROM products WHERE product_desc ILIKE $1`,
                [`%${search_query}%`] // Use search_query for the wildcard search
            );
        }
        // Search by Category
        else if (col.toLowerCase() === "category") {
            const categoryId = Number(search_query);
            if (isNaN(categoryId)) {
                return res.status(400).send("Invalid category ID format");
            }

            result = await client.query(
                `SELECT * FROM products WHERE category_id = $1`,
                [categoryId] // Use categoryId for filtering
            );
        }
        // Search by User ID
        else if (col.toLowerCase() === "user_id") {
            const userId = Number(search_query);
            if (isNaN(userId)) {
                return res.status(400).send("Invalid user ID format");
            }

            result = await client.query(
                `SELECT * FROM products WHERE user_id = $1`,
                [userId] // Use userId for filtering
            );
        }
        // Handle price_between search
        else if (col.toLowerCase() === "price") {
            const [minPriceStr, maxPriceStr] = search_query.split("to");
            const minPrice = minPriceStr ? Number(minPriceStr) : 0; // Default minPrice to 0
            const maxPrice = maxPriceStr ? Number(maxPriceStr) : Infinity; // Default maxPrice to Infinity

            if (isNaN(minPrice) || isNaN(maxPrice)) {
                return res.status(400).send("Invalid price range format");
            }

            result = await client.query(
                `SELECT * FROM products WHERE price BETWEEN $1 AND $2`,
                [minPrice, maxPrice] // Use minPrice and maxPrice for the price range filter
            );
        }

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
            res.status(404).send("No products found with the given query"); // Handle not found
        }
    } catch (err) {
        console.error(
            `Error fetching products with given query ${search_query}: `,
            err.stack
        );
        res.status(500).send("Internal Server Error");
    }
});

export default router; // Export the router
