import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'; // Import arrow up icon from react-icons library
import './scroll.css'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down 300px
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up event listeners when component mounts
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up event listeners when component unmounts
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Optional: smooth scrolling animation
        });
    };

    return (
        <>
            {isVisible && (
                <div className="scroll-to-top" onClick={scrollToTop}>
                    <FaArrowUp />
                </div>
            )}
        </>
    );
};

export default ScrollToTopButton;
