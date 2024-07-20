import React from "react";
import ScrollToTopButton from "../utils/ScrollToTopButton";
import SocialMediaButton from "../utils/SocialMediaButton";
import About from "./about";
import Contact from "./contact";
import Faq from "./faq";
import Services from "./services";

const MainKomponent = () => {
    return (
        <div>
            <SocialMediaButton />
            <ScrollToTopButton />
            <About />
            <Services />
            <Faq />
            <Contact />
        </div>
    );
};

export default MainKomponent;
