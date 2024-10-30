
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import Fist from './view/Fist/Fist';
import Home from './view/Home/Home';
import Main from './view/Main/Main';
import { MyContextProvider } from './Context/MyContext.jsx';
function App() {
  const [isFullScrn, setFullScrn] = useState(false);

  const reqFullscreen = () => {
    if (document.body.requestFullscreen) {
      document.body.requestFullscreen().then(() => {
        console.log('Request accepted');
      }).catch((e) => {
        console.error(e);
      });
    } else {
      console.warn('Fullscreen not supported');
    }
  };

  useEffect(() => {
    if (isFullScrn) {
      reqFullscreen();
    }
  }, [isFullScrn]);

  return (
    <div>
      <BrowserRouter>
      <MyContextProvider>
        <Routes>
          <Route path='/' element={<Fist chechscrn={setFullScrn} />} />
          <Route path='/home' element={<Home />} />
          <Route path='/screen' element={<Main />} />
        </Routes>
          /</MyContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;