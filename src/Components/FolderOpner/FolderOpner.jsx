import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import { useMyContext } from '../../Context/MyContext';
import "./FolderOpner.css"
import Fileimg from "../../assets/folder.png"

const FolderOpener = ({ data }) => {

  const {fileContentOpen,setFileContentOpen} = useMyContext();
  const [openProject,setOpenProject] =useState('')
  

  return (
    <>
    <div className='folder-continer'>
      <Nav />
      <span className='folder-title'>📄 {data.name}</span>
      <div className='project-continer'>
        {data.content.map((project) => {
          return (<>
            <div className='folder-info'>
              <img src={Fileimg}  onClick={()=>{
                setFileContentOpen(true)
                setOpenProject(project)
              }} className='folder-img'/>
              <div className='project-name'>{project.name}</div>
            </div>
          </>)
        })}
      </div>
      {fileContentOpen ? <FileContentOpener project={openProject}/> : null}
    </div>
    </>
  )
}

export default FolderOpener