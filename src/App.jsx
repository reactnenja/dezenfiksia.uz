import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS faylini import qilish
import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
const App = () => {
    AOS.init();
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
};

export default App;
