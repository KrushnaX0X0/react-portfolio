import React from 'react'
import "./File.css"    
import Fillpo from "../../assets/file.png"
import FileOpner from '../FileOpner/FileOpner'
import { useMyContext } from '../../Context/MyContext'


function File({fileInfo}) {
  let {setFileOpen ,isfileOpen} = useMyContext()
  return (
    <>
    <div className='file-continer' onClick={()=>{
      setFileOpen(true)
    }}>
    <img src={Fillpo} alt="" className='img-file'/>
    <span className='file-title'>{fileInfo.name}</span>

    
    
    </div>
    {isfileOpen ? <FileOpner data={fileInfo} /> : null}
    </>
  )
}

export default File