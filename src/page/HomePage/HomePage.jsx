import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPhotoFetch} from "../../store/photoSlise";
import Photo from "../../components/Photo/Photo";
import {Row} from "react-bootstrap";
import cl from './HomePage.module.css'

const HomePage = () => {
    const photo = useSelector(state => state.photo.photo)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPhotoFetch())
    },[dispatch])
    return (
        <div >
            <Row className={cl.content}>
                {photo.map(photos=>
                    <Photo key={photos.id} photos={photos}/>
                )
                }
            </Row>
        </div>

    )
};

export default HomePage;