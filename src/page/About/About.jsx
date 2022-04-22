import React from 'react';
import cl from './About.module.css'
import {Image} from "react-bootstrap";

const About = () => {
    return (
        <div className={cl.content}>
            <div className={cl.head}>
                <div>
                    <Image className={cl.photo}
                           src='https://sun1-16.userapi.com/s/v1/if1/BWB4O45i2bSv2owrVVra3hjUawLU3C8BDPGDVmn7GkNq4VkqO79_AvAkkx_bKqZUA8UahGG4.jpg?size=200x200&quality=96&crop=0,166,1006,1006&ava=1'/>
                </div>
                <span>About</span>

            </div>
            <div className={cl.info}>
                <div className={cl.header}>
                    <div>
                        <span className={cl.name}>Sergey</span>
                        <span className={cl.surname}>Lisovcev</span>
                    </div>
                    <div className={cl.profession}>Junior Front-End developer</div>
                </div>
                <hr/>
                <div>
                        <p>content</p>
                </div>
            </div>
        </div>
    );
};

export default About;