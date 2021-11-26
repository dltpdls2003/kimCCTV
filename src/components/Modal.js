import React from 'react';
import "./Modal.css";

function Modal({ setOpenModal }) {
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                    onClick={()=>{
                       setOpenModal(false); 
                    }}>
                        X
                    </button>
                </div>
                <div className="title">
                    <p1>위험 발생</p1>
                </div>
                <div className="body">
                    <p1>00시00분 어디어디서 사고남</p1>
                </div>
            </div>
        </div>
    )
}

export default Modal;