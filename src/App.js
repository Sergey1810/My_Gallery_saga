import React from 'react'
import Header from "./components/Header";
import HomePage from "./page/HomePage/HomePage";
import {Route, Routes} from 'react-router-dom'
import About from "./page/About/About";
import PhotoInfo from "./page/PhotoInfo/PhotoInfo";
import Futer from "./components/Futer";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/:id' element={<PhotoInfo/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>

        </div>
    );
}

export default App;
