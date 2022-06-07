import React, { useEffect, useState } from "react";
import "./style.css"
const Modal = ({ onToogleModal, classModal, qualities }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const [qualitiesPaginate, setQualitiesPaginate] = useState(qualities.slice(0, 3))
    const paginatePages = (items) => {
        const arr = []
        for ( let i = 0; i < items; i++ ){
            arr.push(i)
        }
        return arr
    }
    const pages = paginatePages(qualities.length / 3)
    const handleChangePage = ({ target }) => {
        setCurrentPage(target.className.includes("back") ?  0 : 1 )
    }

    const back = <img onClick={handleChangePage} src={require("../../img/third/btn_back.png")} alt="icon" className="modal-icon back"/>
    const next = <img onClick={handleChangePage} src={require("../../img/third/btn_next.png")} alt="icon" className="modal-icon next"/>

    useEffect(() => {
        setQualitiesPaginate(qualities.slice(currentPage*3, 3 + currentPage*3))
    },[currentPage])

     return (
        <div className={`modal `+ classModal}>
            <div className="modal-content">
                <div className="modal-field">
                    <div className="modal-content-title">
                        <p>Преимущества</p>
                        <p className="brand">BREND<b>XY</b></p>
                        <div className="modal-close" onClick={onToogleModal}>X</div>
                    </div>
                    <div className="modal-positions">
                        {qualitiesPaginate.map((item) => (
                                <>
                                <div className="modal-quality-number">{"0" + (item.id)}</div>
                                <div className="modal-quality-text">{item.text}</div>
                                </>
                        ))}
                    </div>
                    <div className="pagination">
                            <div className="down"> {back} </div>
                                {pages.map((item, index) => (
                                    <>
                                    <div key={item.id} className={"paginate-item " + (index === currentPage ? "active-page" : "")}></div>
                                    </>
                                ))}
                            <div className="up"> {next} </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;