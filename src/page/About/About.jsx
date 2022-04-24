import React from 'react';
import cl from './About.module.css'


const About = () => {
    return (
        <div className={cl.content}>
            <div>
                <div className={cl.header}>About</div>
                <hr/>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dicta distinctio fugiat in iusto
                    labore, laudantium placeat, quibusdam ratione temporibus vel veritatis! At cupiditate doloribus
                    expedita impedit similique voluptate, voluptates.
                </div>
            </div>
        </div>
    );
};

export default About;