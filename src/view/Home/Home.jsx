import React from 'react'
import"./Home.css"
import profile from "../../assets/profile.svg"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-login'>
        <div className="profle-img-continer">
        
    <img src={profile} alt="" className='profile-img' />
    </div>

    <h2 className='user-name'>krushan jagtap</h2>
   <Link to="/screen" className='text'><button className='btn-login'> <i class="ri-arrow-right-line"></i>Login</button></Link>
    </div>
  )
}

export default Home