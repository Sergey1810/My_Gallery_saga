import React from 'react';
import {useLocation} from "react-router-dom";
import {Image} from "react-bootstrap";
import cl from'./PhotoInfo.module.css'


const PhotoInfo = () => {
const location = useLocation()
    return (
            <div className={cl.content}>
                <div className={cl.img}>
                    <Image src={location.state.url}/>
                </div>
                <div className={cl.title}>
                    <h3>{location.state.title}</h3>
                </div>
            </div>
    );
};

export default PhotoInfo;