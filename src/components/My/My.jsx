import React from 'react';
import {Image} from "react-bootstrap";
import cl from './My.module.css'

const My = () => {
    return (
        <div>
            <div className="d-flex align-items-center" >
                <div >
                    <Image className={cl.avatar} src='https://sun1-16.userapi.com/s/v1/if1/BWB4O45i2bSv2owrVVra3hjUawLU3C8BDPGDVmn7GkNq4VkqO79_AvAkkx_bKqZUA8UahGG4.jpg?size=200x200&quality=96&crop=0,166,1006,1006&ava=1'/>
                </div>
                <div className={cl.header}>
                    <p>Sergey Lisovtcev</p>
                </div>
            </div>

        </div>


    );
};

export default My;