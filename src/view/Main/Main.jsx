import React from 'react'
import "./Main.css"
import Nav from '../../Components/Nav/Nav.jsx'
import { useMyContext } from '../../Context/MyContext.jsx'
import File from '../../Components/File/File.jsx'


function Main() {
  let { time ,dayInfo } = useMyContext()


  return (
    <>

      <Nav />
      <div className='main-files'>
        <div className="date-time-continer">
        <div className='time time-font'>{time.split(" ")[0]}</div>
        <div className='time time-fon'>{dayInfo}</div>
        </div>
        <File/>
      </div>
      
    </>
  )
}

export default Main