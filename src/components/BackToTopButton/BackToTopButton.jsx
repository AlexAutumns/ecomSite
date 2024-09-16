// BackToTopButton.jsx
import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scroll effect
        });
    };

    // Show or hide button based on scroll position
    const handleScroll = () => {
        if (window.scrollY > 300) {
            // Adjust the scroll position as needed
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="w-[100%] bottom-0 bg-gradient-to-r from-third_color to-fifth_color hover:scale-[1.1] text-white font-bold m-0 py-2 mt-2 shadow-md  transition duration-300 ease-in-out"
                    aria-label="Back to Top" // Accessibility feature
                >
                    Back to Top
                </button>
            )}
        </>
    );
};

export default BackToTopButton;
