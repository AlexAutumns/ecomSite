import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { IoMdSearch } from 'react-icons/io'; // Import your icon

const SearchBar = () => {
    const [searchName, setSearchName] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (searchName.trim()) {
            // Navigate to the results page with the search query
            navigate(`/search?product_name=${searchName}`);
        }
    };

    return (
        <div className="relative group hidden sm:block">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="
                        w-[200px] sm:w-[200px]
                        group-hover:w-[300px] transition-all
                        duration-300 rounded-full 
                        border-2 border-gray-300 px-2 py-1 focus:outline-none focus:border-2
                        focus:border-third_color/100
                        dark:border-gray-500 dark:bg-gray-600
                        dark:text-white
                    "
                />
                <button type="submit" className="absolute top-1/2 -translate-y-1/2 right-3">
                    <IoMdSearch className="text-gray-500 group-hover:text-third_color dark:text-white" />
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
