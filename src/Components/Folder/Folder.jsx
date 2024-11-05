import React from 'react'
import folder from "../../assets/folder.png"
import "./Folder.css"
import FolderOpener from '../FolderOpner/FolderOpner'
import { useMyContext } from '../../Context/MyContext'

function Folder({fileInfo}) {
  let {isFolderOpen,setFolderOpen} = useMyContext()
   
  return (
    <>
    <div className='folder-i'>
        <img src={folder} alt="" className='folder-img' onClick={()=>{setFolderOpen(true)}}/>
        <span className="folder-ti">{fileInfo.name}</span>
    </div>
    {isFolderOpen ? <FolderOpener data={fileInfo}/> : null }

    </>
  )
}

export default Folder