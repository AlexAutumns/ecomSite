import React from "react";

import { useState, useEffect } from "react";

import lightIcon from "../../assets/light_icon.svg";
import darkIcon from "../../assets/dark_icon.svg";

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement; // html element

    React.useEffect(() => {
        if (theme == "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <div className="relative">
            <img
                src={lightIcon}
                alt=""
                onClick={() => setTheme(theme == "light" ? "dark" : "light")}
                className={`w-9 cursor-pointer
                    bg-gradient-to-r from-yellow-200 to-white 
                    rounded-full px-1 py-1
                    drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 
                    ${theme == "dark" ? "opacity-0" : "opacity-100"}`}
            />
            <img
                src={darkIcon}
                alt=""
                onClick={() => setTheme(theme == "light" ? "dark" : "light")}
                className={`w-9 cursor-pointer
                    bg-gradient-to-r from-gray-950 to-blue-900 
                    rounded-full px-1 py-1
                    drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 
                    ${theme == "dark" ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    );
};

export default DarkMode;
