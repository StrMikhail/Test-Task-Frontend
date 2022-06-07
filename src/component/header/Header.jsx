import React from "react";
import "./style.css";
const Header = () => {
    return (
        <div className="header">
                <div className="header-icon" href="#main">
                    <a id="main" onClick={() => console.log("asdsd")}><img src={require("./HeaderIcon.png")} alt="icon" className="icon-pr" /></a>
                </div>
                <div className="header-text">
                    <a>PROJECT</a>
                </div>
                
        </div>
    );
};

export default Header;