import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS faylini import qilish
import React, { useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
const App = () => {
    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000, // Animatsiya davomiyligi
        });
    }, []);
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default App;
