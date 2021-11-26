import React ,{useState,useRef} from 'react'
import Web from '../components/web';
import '../App.css';
import Modal from "../components/Modal";
import SockJsClient from 'react-stomp';
import "../components/Modal.css";
import AxiosApi from './p_component/AxiosApi'; 



function Home() {
    const $websocket = useRef (null);
    const handleMsg = msg => {
        console.log(msg);
    };
    const [modalOpen, setModalOpen] = useState(false);
     
    return (
        <div className='home'>
            <Web />         
            <p>CCTV.01</p>
          
                    {modalOpen && <Modal setOpenModal={setModalOpen} />}
                    <div>
                        <SockJsClient
                        url="http://3.35.107.166:8080/test"
                        topics={['/topics/api']}
                        onMessage={()=>{
                            setModalOpen(true);
                        }}
                        ref={$websocket}
                        ></SockJsClient>
                    </div>
        </div>
    )

    function Modal({ setOpenModal }) {
        const date = new Date();
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
                        <p1>CCTV.01</p1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
