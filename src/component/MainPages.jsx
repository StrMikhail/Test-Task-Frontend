import React from "react";
import FirstPage from "./firstPage/FirstPage";
import Header from "./header/Header";
import SecondPage from "./secondPage/SecondPage";
import "./style.css"
import ThirdPage from "./thirdPage/ThirdPage";
const MainPages = () => {
    return (
        <>
        <Header />
        <div className="container">
            <FirstPage />
            <SecondPage />
            <ThirdPage />
        </div>
        </>
    );
};

export default MainPages;