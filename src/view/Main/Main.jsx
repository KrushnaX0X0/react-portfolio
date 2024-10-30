import React from 'react'
import "./Main.css"
import Nav from '../../Components/Nav/Nav.jsx'
import { useMyContext } from '../../Context/MyContext.jsx'


function Main() {
  let { time ,dayInfo } = useMyContext()


  return (
    <>

      <Nav />
      <div className='main-files'>
        <div className='time'>{time.split(" ")[0]}</div>
        <div className='time'>{dayInfo}</div>
      </div>
    </>
  )
}

export default Main