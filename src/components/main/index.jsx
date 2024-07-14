import React from "react";
import ScrollToTopButton from "../utils/ScrollToTopButton";
import SocialMediaButton from "../utils/SocialMediaButton";
import About from "./about";
import Contact from "./contact";
import Faq from "./faq";
import Services from "./services";

const Main = () => {
    return (
        <main>
            <SocialMediaButton />
            <ScrollToTopButton />
            <About />
            <Services />
            <Faq />
            <Contact />
        </main>
    );
};

export default Main;
