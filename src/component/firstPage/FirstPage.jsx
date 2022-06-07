import React from "react";
import "./style.css"
const FirstPage = () => {

    return (
        <section className="child child_1" id="main">
            <div className="first-page-content">
                <div className="hello-text small">
                    <p>привет,</p>
                </div>
                <div className="hello-text"><p>это <a>не</a></p></div>
                <div className="hello-text"><p>коммерческое</p></div>
                <div className="hello-text hello-button">
                    <div><p>задание</p></div>
                    <div className="button-content">
                        <button >
                                <img src={require("../../img/firstPage/str.png")} alt="icon" className="icon-str"/>
                        </button>Что дальше?
                    </div>
                </div>  
            </div>
            <img src={require("../../img/firstPage/Layer_4.png")} alt="icon" className="icon-bg-1 animate animate-4" />

            <img src={require("../../img/firstPage/Layer_5.png")} alt="icon" className="icon-bg-1 animate animate-3" />
            <img src={require("../../img/firstPage/Layer_8.png")} alt="icon" className="icon-bg-1 animate animate-2" />
            <img src={require("../../img/firstPage/bakti_1.png")} alt="icon" className="icon-bg-1 animate animate-1" />
            <img src={require("../../img/firstPage/pink_sperm.png")} alt="icon" className="icon-bg-1 static static-1" />
            <img src={require("../../img/firstPage/Static_2.png")} alt="icon" className="icon-bg-1 static static-2" />
            <img src={require("../../img/firstPage/Static_2.png")} alt="icon" className="icon-bg-1 static static-3" />
            <img src={require("../../img/firstPage/pink_sperm_1.png")} alt="icon" className="icon-bg-1 static static-4" />
            <img src={require("../../img/firstPage/Static_3.png")} alt="icon" className="icon-bg-1 static static-5" />

        </section>
    );
};

export default FirstPage;