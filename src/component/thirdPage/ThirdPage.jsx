import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./style.css"
import "./icons.css"
const ThirdPage = () => {
    const [modal, setModal] = useState(false)
    const [classModal, setClassModal] = useState("modal_hidden")
    const [pageContent, setPageContent] = useState()
    const qualities = [
        {id: 1, text: "Lorem, ipsum dolor Lorem, ipsum dolor"},
        {id: 2, text: "Lorem, ipsum dolor Lorem, ipsum"},
        {id: 3, text: "Lorem, ipsum dolor  ipsum dor"},
        {id: 4, text: "Lorem, ipsum dolor Lorem, ads ad asd ads as "},
        {id: 5, text: "Lorem, ipsum dolor Lorem, ipsum "},
        {id: 6, text: "Lorem, ipsum dolor Lorem, ipsum dolor"},
    ]

    const handleOpenModal = () => {
        setModal(prev => !prev)
        setClassModal(modal ? "modal_hidden" : "modal_active")
        setPageContent(pageContent === "hidden" ? "" : "hidden")
    }
    return (
        <section className="child child_3" >
            <div className="third-page">
{/* -------------------------------------Content------------------------------------------------------------------------------------- */}
                <div className={"third-page-content " + pageContent}>
                    <div className="third-content-title">
                            <p>Преимущества</p>
                            <p className="brand">BREND<b>XY</b></p>
                    </div>
                    <div className="third-content-blocks">
                        <div className="blocks-plate">
                            <div className="palte-text">
                                <img src={require("../../img/third/icon2.png")} alt="icon" className="icon-card-1" />
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Voluptates, ea?
                                </p>
                            </div>
                        </div>
                        <div className="blocks-card">
                            <div className="card-text">
                                <img src={require("../../img/third/icon1.png")} alt="icon" className="icon-card-2" />
                                <p>Lorem ipsum dolor sit</p>
                            </div>
                            <div className="card-buttom"> 
                                <div className="button-content" onClick={handleOpenModal}>
                                    <button >
                                        <h1>+</h1>
                                    </button>
                                    Подробнее
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
{/* -------------------------------------Modal------------------------------------------------------------------------------------- */}
                <Modal onToogleModal={handleOpenModal} classModal={classModal} qualities={qualities}/>
{/*---------------------------------------------------------------------------------------------------------------------------------*/}
                <img src={require("../../img/third/bottle.png")} alt="icon" className="icon-bg-3" />
                <img src={require("../../img/third/1.png")} alt="icon" className="icon-bg-3 babble-1" />
                <img src={require("../../img/third/2.png")} alt="icon" className="icon-bg-3 babble-2" />
                <img src={require("../../img/third/3.png")} alt="icon" className="icon-bg-3 babble-3" />
                <img src={require("../../img/third/4.png")} alt="icon" className="icon-bg-3 babble-4" />
                <img src={require("../../img/third/5.png")} alt="icon" className="icon-bg-3 babble-5" />
                <img src={require("../../img/third/6.png")} alt="icon" className="icon-bg-3 babble-6" />
                <img src={require("../../img/third/7.png")} alt="icon" className="icon-bg-3 babble-7" />
                <img src={require("../../img/third/8.png")} alt="icon" className="icon-bg-3 babble-8" />
            </div>
        </section>
    );
};

export default ThirdPage;