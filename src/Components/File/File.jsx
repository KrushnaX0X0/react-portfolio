import React from 'react'
import "./File.css"
import Fillpo from "../../assets/file.png"

function File() {
  return (
    <div className='file-continer'>
    <img src={Fillpo} alt="" className='img-file'/>
    </div>
  )
}

export default File