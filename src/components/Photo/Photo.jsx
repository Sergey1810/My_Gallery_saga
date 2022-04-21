import React from 'react';
import cl from './Photo.module.css'
import {useNavigate} from "react-router-dom";
import {Col} from "react-bootstrap";

const Photo = ({photos}) => {
    const navigate = useNavigate()
    function handlerClick() {
        navigate(`/${photos.id}`,{state:photos})
    }

    return (
        <Col className="mt-3">
            <div className={cl.hover__effect__btn}>
                <img src={photos.url} alt="" className={cl.photo}/>
                <div className={cl.overlay}></div>
                <div className={cl.button}>
                    <div className={cl.button__link} onClick={handlerClick}>
                        Подробнее
                    </div>
                </div>
            </div>
        </Col>

    );
};

export default Photo;