import POJECT1 from "../assets/project1.jpg"

const FILES_DATA = [
    {
       type: 'file',
       name: 'My Story',
       fildData: [
 
          {
             title: "My Story",
             discription: 'Hii 👋 , My name is krushna jagtap. I m fullStack webdeveloper from India . I enjoy learning new skills and keeping up with the latest trends in technology to deliver great projects.',
             Image: false
          },
          {
             title: 'My Interest',
             discription: 'I started my web development journey in 12th using just my mobile phone. I learned the basics of coding with HTML, CSS, and JavaScript. Now, I am comfortable working with Node.js, React, and MongoDB, allowing me to build dynamic and responsive applications. I enjoy tackling new challenges and continuing to grow as a developer.',
             Image: false
          },
          {
             title: 'My Projects',
             discription: 'In my journey i learn lot of things. I create lot of project there i share some between them.',
             Image: [POJECT1]
          }
 
       ]
    },
    {
       type: 'contact',
       name: ''
    }, {
       type: 'folder',
       name: 'projects',
       content: [
          {
             type: "folder",
             name: 'Durvas Travels',
             inner_data: [
                { type: "file", title: 'note' },
                { type: "photo", title: 'screenshot', url: "" },
                { type: "htmlDoc", title: 'website', url: 'https://durvas-world-travels.netlify.app/' }, 
                { type: "gitdoc", title: 'github repo.' },
                {
                   
                }
             ]
          },
          {
             type: "folder",
             name: 'workZone',
             inner_data: [
                { type: "file", title: 'note' }, 
                { type: "photo", title: 'scrrenshot', url: ""}, 
                { type: "htmlDoc", title: 'website', url: 'https://work-zzone.netlify.app' }, 
                { type: "gitdoc", title: 'github repo.' }]
          },
       ]
    }
 ]
 
 export { FILES_DATA }