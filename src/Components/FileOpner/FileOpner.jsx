import React from 'react'
import "./FileOpner.css"
import Nav from "../Nav/Nav"


function FileOpner({data}) {

  return (
    <>
    

      <div className='fileopner-continer'>
        <Nav/>
        
        <p className='title-name'>📄 {data.name}</p>
        <div className='title-continer'>
         {data.fildData.map((showdata ,index)=>{
          console.log(showdata,index )
           return(<>
              <div key={index} >
                <h2 className='title' key={index} >{showdata.title}</h2>
                <p className=''>{showdata.discription}</p>
                 <div>
                  {showdata.Image == false ? null : <>
                    {
                      showdata.Image.map((path)=>(
                        <img src={path} className='project-img'/>
                      ))
                    }
                  </>}
                 </div>
              </div>
            </>)
         })}
      </div>


      </div>
    

    </>
  )
}

export default FileOpner