import React from 'react'
import "./FileOpner.css"
import Nav from "../Nav/Nav"


function FileOpner({data}) {
  console.log(data)
  return (
    <>
    

      <div className='fileopner-continer'>
        <Nav/>
        <span>{data.name}</span>

      </div>
    

    </>
  )
}

export default FileOpner