import React from 'react';
import "./Fist.css";
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

function Fist({ chechscrn }) {
    const handleFullScreen = () => {
        chechscrn(true);
    };

    return (
        <div className='fist-page-continer'>
              <Link to="/home" className='text'>
            <span className='pawer-icon' onClick={handleFullScreen}>
            <i className="ri-shut-down-line text"></i>   
            </span>
            </Link>
            
        </div>
    );
}

export default Fist;