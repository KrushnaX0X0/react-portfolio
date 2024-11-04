import React from 'react'
import "./Main.css"
import Nav from '../../Components/Nav/Nav.jsx'
import { useMyContext } from '../../Context/MyContext.jsx'
import File from '../../Components/File/File.jsx'
import Folder from '../../Components/Folder/Folder.jsx'
import { FILES_DATA } from '../../config/ShowData.jsx'


function Main() {
  let { time, dayInfo } = useMyContext()


  return (
    <>

      <Nav />
      <div className='main-files'>
        <div className="date-time-continer">
          <div className='time time-font'>{time.split(" ")[0]}</div>
          <div className='time time-fon'>{dayInfo}</div>
        </div>
        <div className='file-info'>
          {FILES_DATA.map((fileInfo) => {
            return (<>{
              fileInfo.type === "file" ? <File fileInfo={fileInfo} /> : fileInfo.type === "folder" ? <Folder fileInfo={fileInfo} /> : null
            }</>)
          })}
        </div>
      </div>

    </>
  )
}

export default Main