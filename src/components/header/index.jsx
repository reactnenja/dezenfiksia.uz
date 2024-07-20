import React from "react";
import Hero from "./hero";
import Navbar from "./navbar";

const Header = ({ changeLanguage }) => {
    return (
        <header>
            <Navbar changeLanguage={changeLanguage} />
            <Hero />
        </header>
    );
};

export default Header;
