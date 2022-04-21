import React from 'react';
import {useLocation} from "react-router-dom";
import {Col, Image, Row} from "react-bootstrap";


const PhotoInfo = () => {
const location = useLocation()
    return (
        <Row>
           <Col className='m-5 w-400 h-400'>
               <Image src={location.state.url}/>
           </Col>
            <Col className='m-5'>
                <h3>{location.state.title}</h3>
            </Col>
        </Row>
    );
};

export default PhotoInfo;