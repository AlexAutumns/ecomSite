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

// Endpoint to get users
router.get("/", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM users;");
        const userList = result.rows.map((row) => ({
            id: row.id,
            username: row.username,
            email: row.email,
            user_pass: row.user_pass,
            user_pic_url: row.user_pic_url,
            joined_at: row.joined_at,
            is_deleted: row.is_deleted,
        }));
        res.json(userList);
    } catch (err) {
        console.error("Error fetching users:", err.stack);
        res.status(500).send("Internal Server Error");
    }
});


// Endpoint to get users with ID
router.get("/:id", async (req, res) => {
    const { id } = req.params; // Extract the id from the path
    try {
        const result = await client.query(
            "SELECT * FROM users WHERE id = $1", // Use parameterized query
            [id] // Pass the ID to the query
        );

        const userList = result.rows.map((row) => ({
            id: row.id,
            username: row.username,
            email: row.email,
            user_pass: row.user_pass,
            user_pic_url: row.user_pic_url,
            joined_at: row.joined_at,
            is_deleted: row.is_deleted,
        }));

        // Check if any products were found
        if (userList.length > 0) {
            res.json(userList); // Return found products as JSON
        } else {
            res.status(404).send("No users found with the given ID"); // Handle not found
        }
    } catch (err) {
        console.error("Error fetching user: ", err.stack);
        res.status(500).send("Internal Server Error");
    }
});


// Endpoint to get users with ID without password and email
router.get("/public/:id", async (req, res) => {
    const { id } = req.params; // Extract the id from the path
    try {
        const result = await client.query(
            "SELECT * FROM users WHERE id = $1", // Use parameterized query
            [id] // Pass the ID to the query
        );

        const userList = result.rows.map((row) => ({
            id: row.id,
            username: row.username,
            user_pic_url: row.user_pic_url,
            joined_at: row.joined_at,
            is_deleted: row.is_deleted,
        }));

        // Check if any products were found
        if (userList.length > 0) {
            res.json(userList); // Return found products as JSON
        } else {
            res.status(404).send("No users found with the given ID"); // Handle not found
        }
    } catch (err) {
        console.error("Error fetching user: ", err.stack);
        res.status(500).send("Internal Server Error");
    }
});

export default router; // Export the router


