import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll effect
        });
    };

    // Show or hide button based on scroll position
    const handleScroll = () => {
        if (window.scrollY > 300) { // Adjust the scroll position as needed
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 
                    bg-gradient-to-r from-third_color dark:from-first_color  to-fifth_color dark:to-second_color dark:text-white 
                    hover:scale-[1.1] font-bold py-3 px-4 text-lg rounded shadow-lg transition duration-300 ease-in-out"
                    aria-label="Back to Top" // Accessibility feature
                >
                    Back to Top
                </button>
            )}
        </>
    );
};

export default BackToTopButton;
