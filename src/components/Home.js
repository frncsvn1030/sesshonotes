import React from "react";
import { useNavigate } from 'react-router-dom';

import logo from '../img/sesshomaru.jpg';

const Home = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/todolist')
    }
    
    return (
        <div className="home-main">
            <div className="content uk-card uk-card-default uk-card-body">
                <img src={logo} alt="sesshomaru" className="uk-margin-bottom" style={{ width: '150px', margin: '0 auto', display: 'block' }} />
                <h1>SesshōNotes</h1>
                <button className="uk-button uk-button-primary" onClick={handleClick}>Get Started</button>
            </div>
        </div>
    )
}

export default Home