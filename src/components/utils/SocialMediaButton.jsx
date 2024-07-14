import React, { useState } from "react";
import {
    FaFacebook,
    FaInstagram,
    FaPlus,
    FaTelegram,
    FaYoutube,
} from "react-icons/fa";

const SocialMediaButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useState(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div
            className={
                isMenuOpen
                    ? `fixed bottom-16 right-[11px] flex flex-col items-center`
                    : `fixed bottom-16 right-4 flex flex-col items-center`
            }
        >
            {isVisible && (
                <>
                    {isMenuOpen && (
                        <div className="flex flex-col mb-4 bg-white shadow-md px-2 py-4 border-2 border-whtie rounded-md duration-700 transition-all space-y-2">
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-all duration-300"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.telegram.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
                            >
                                <FaTelegram />
                            </a>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-all duration-300"
                            >
                                <FaFacebook />
                            </a>
                        </div>
                    )}
                    <button
                        onClick={toggleMenu}
                        className={`p-3 mb-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 ${
                            isMenuOpen ? "transform rotate-45" : ""
                        }`}
                    >
                        <FaPlus />
                    </button>
                </>
            )}
        </div>
    );
};

export default SocialMediaButton;
