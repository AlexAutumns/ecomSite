import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null); // State for error handling
    const [loading, setLoading] = useState(true); // State for loading

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/categories"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                setError(error);
                console.error("Error fetching categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Display loading state
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Display error state
    }

    return (
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-x-2 gap-y-6">
                {categories.map((category) => (
                    <Link to={`/categories/${category.id}`} key={category.id}>
                        <div
                            key={category.id}
                            className="p-8 space-y-4 rounded-md shadow-md 
                            flex justify-center items-center flex-col 
                            hover:shadow-lg hover:scale-[1.07] hover:bg-cyan-100 dark:hover:bg-cyan-700
                            group transition-all ease-in-out duration-300
                            dark:bg-slate-700 dark:text-white
                            h-[6.25rem] w-[15.625rem]" // Set a fixed height (adjust as needed)
                        >
                            <h2 className="text-center text-xl">
                                {category.name}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
