import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../../assets/logo.svg";

const Navbar = ({ changeLanguage }) => {
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const languages = localStorage.getItem("i18nextLng");

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed w-full transition-all duration-300 z-50 ${
                isScrolled
                    ? "bg-white/70 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex items-center justify-between h-20">
                    <a href="#">
                        <img
                            src={Logo}
                            alt="Logo web-site"
                            className="max-lg:w-40"
                        />
                    </a>
                    <div className="hidden lg:flex items-center gap-9">
                        <ul className="flex items-center gap-9">
                            <li>
                                <a
                                    href="#service"
                                    className="hover:text-white transition-all duration-300 hover:bg-[#3375FF] p-2 rounded-md font-light hover:backdrop-blur-sm"
                                >
                                    {t("Service")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-white transition-all duration-300 hover:bg-[#3375FF] p-2 rounded-md font-light hover:backdrop-blur-sm"
                                >
                                    {t("About")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="hover:text-white transition-all duration-300 hover:bg-[#3375FF] p-2 rounded-md font-light hover:backdrop-blur-sm"
                                >
                                    {t("Faq")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-white transition-all duration-300 hover:bg-[#3375FF] p-2 rounded-md font-light hover:backdrop-blur-sm"
                                >
                                    {t("Contact")}
                                </a>
                            </li>
                        </ul>
                        <select
                            name="ln"
                            id="ln"
                            onChange={(e) => changeLanguage(e.target.value)}
                            value={languages}
                            className="sm:block border rounded px-2 py-1 bg-white"
                        >
                            <option value="uz">Uzbek</option>
                            <option value="en">English</option>
                            <option value="ru">Russian</option>
                        </select>
                        <button className="bg-[#3375FF] rounded-full p-2 w-48 text-white hover:scale-125 transition-all duration-300 hover:bg-transparent hover:text-[#3375FF] border border-[#3375FF]">
                            {t("Kirish")}
                        </button>
                    </div>
                    <div className="lg:hidden flex items-center">
                        <select
                            name="ln"
                            id="ln"
                            onChange={(e) => changeLanguage(e.target.value)}
                            value={languages}
                            className="border rounded px-2 py-1 mr-2 bg-white"
                        >
                            <option value="uz">Uzbek</option>
                            <option value="en">English</option>
                            <option value="ru">Russian</option>
                        </select>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-2xl focus:outline-none"
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <div className="lg:hidden bg-white p-5 shadow-lg fixed w-full left-0">
                        <ul className="flex flex-col items-center gap-4 mt-4">
                            <li className="w-full p-1">
                                <a
                                    href="#service"
                                    className="block py-4 text-center hover:text-white transition-all duration-300 hover:bg-[#3375FF] p-2 rounded-md font-light hover:backdrop-blur-sm"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t("Service")}
                                </a>
                            </li>
                            <li className="w-full p-1">
                                <a
                                    href="#about"
                                    className="block py-4 text-center hover:text-white transition-all duration-300 hover:bg-[#3375FF] p-2 rounded-md font-light hover:backdrop-blur-sm"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t("About")}
                                </a>
                            </li>
                            <li className="w-full p-1">
                                <a
                                    href="#faq"
                                    className="block py-4 text-center hover:text-white transition-all duration-300 hover:bg-[#3375FF] p-2 rounded-md font-light hover:backdrop-blur-sm"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t("Faq")}
                                </a>
                            </li>
                            <li className="w-full p-1">
                                <a
                                    href="#contact"
                                    className="block py-4 text-center hover:text-white transition-all duration-300 hover:bg-[#3375FF] p-2 rounded-md font-light w-full hover:backdrop-blur-sm"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {t("Contact")}
                                </a>
                            </li>
                            <a
                                href="#contact"
                                className="bg-[#3375FF] inline-block rounded-full p-4 w-full text-white hover:scale-125 transition-all duration-300 hover:bg-transparent hover:text-[#3375FF] border border-[#3375FF]"
                            >
                                {t("Kirish")}
                            </a>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
