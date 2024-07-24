import React from "react";
import About from "./about";
import Contact from "./contact";
import Faq from "./faq";
import Services from "./services";

const MainKomponent = () => {
    return (
        <div>
            <About />
            <Services />
            <Faq />
            <Contact />
        </div>
    );
};

export default MainKomponent;
