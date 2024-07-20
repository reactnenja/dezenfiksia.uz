import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "./components/footer";
import Header from "./components/header";
import MainKomponent from "./components/main";
const App = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <>
            <Header changeLanguage={changeLanguage} />
            <MainKomponent />
            <Footer />
        </>
    );
};

export default App;
