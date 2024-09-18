import React from "react";
import { Link } from "react-router-dom";

import DarkMode from "./DarkMode.jsx";

import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";

const loggedIn = true; // create a login system

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Categories",
        link: "/categories",
    },
];

const DropdownLinks = [
    {
        id: 1,
        name: "User",
        link: "/user",
    },
    {
        id: 2,
        name: "Wishlist",
        link: `/wishlist:id`, // check if it is going to a different account
    },
    {
        id: 3,
        name: "Logout",
        link: "/signin",
    },
];

const Navbar = () => {
    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-100 fixed w-[100%] top-0 z-40">
            {/* upper navbar */}
            <div className="bg-third_color/40 py-2">
                <div className="container flex justify-between items-center">
                    <div>
                        <Link
                            to="/"
                            className="
                            font-bold text-2xl sm:text-3xl flex gap-2
                        "
                        >
                            <img src={Logo} alt="Logo" className="w-10" />
                            SHOP NAME
                        </Link>
                    </div>

                    <div className="flex justify-between items-center gap-4">
                        {/* search bar */}
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search"
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
                            <IoMdSearch
                                className="text-gray-500 group-hover:text-third_color
                            dark:text-white
                            absolute top-1/2 -translate-y-1/2 right-3"
                            />
                        </div>

                        {/* order button */}
                        <button
                            onClick={() =>
                                alert("This feature is not available yet")
                            }
                            className="bg-gradient-to-r from-third_color to-fifth_color transition-all duration-300
                                 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-300">
                                Order
                            </span>
                            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>

                        {/* darkmode switch */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
            {/* lower navbar */}
            <div className="flex justify-center">
                <ul className="sm:flex hidden items-center gap-10">
                    {Menu.map((data) => (
                        <li>
                            <Link
                                to={data.link}
                                className="inline-block px-10 hover:text-third_color duration-300"
                            >
                                {data.name}
                            </Link>
                        </li>
                    ))}
                    {/* Account/ login / logout / sign up */}

                    {loggedIn ? (
                        <li className="inline-block mt-2 px-10 hover:text-third_color duration-300 group relative cursor-pointer">
                            <Link
                                to="/account"
                                className="flex items-center gap-[2px] py-2"
                            >
                                Account
                                <span>
                                    <FaCaretDown className=" rotate-180 transition-all duration-200 group-hover:rotate-0" />
                                </span>
                                <div
                                    className="absolute items-center z-[9999] hidden group-hover:block w-[150px] rounded-md
                                    bg-white p-2 text-black shadow-md
                                    translate-y-[4.5rem] translate-x-6"
                                >
                                    <ul>
                                        {DropdownLinks.map((data) => (
                                            <li key={data.id}>
                                                <Link
                                                    to={data.link}
                                                    className="inline-block w-full rounded-md py-1 px-2 hover:bg-gray-200"
                                                >
                                                    {data.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        </li>
                    ) : (
                        <li className="inline-block px-10 hover:text-third_color duration-300 group relative cursor-pointer">
                            <Link
                                to="/signin"
                                className="flex items-center gap-[2px] py-2"
                            >
                                Sign In
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
