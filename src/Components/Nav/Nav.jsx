import React from 'react'
import { useMyContext } from '../../Context/MyContext.jsx'
import "./Nav.css"

const Nav = () => {

    let { time } = useMyContext()

    return (
        <div>
            <div className='nav-main'>
                <div className='time'>{time}</div>
                <div className='icon-pow'>
                    <i className="ri-notification-line hover padd "></i>
                    <i className="ri-shut-down-line hover" ></i>
                </div>
            </div>
        </div>
    )
}

export default Nav