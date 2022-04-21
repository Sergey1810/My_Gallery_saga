import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPhotoFetch} from "../store/photoSlise";
import Photo from "../components/Photo/Photo";
import {Row} from "react-bootstrap";

const HomePage = () => {
    const photo = useSelector(state => state.photo.photo)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPhotoFetch())
    },[dispatch])
    return (
            <Row className="d-flex">
                {photo.map(photos=>
                    <Photo key={photos.id} photos={photos}/>
                )
                }
            </Row>
    )
};

export default HomePage;