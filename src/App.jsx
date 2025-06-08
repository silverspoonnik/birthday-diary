// src/App.jsx
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoverPage from './components/CoverPage';
import HowWeMet from './components/HowWeMet';
import BestMemories from './components/BestMemories';
import WhyILoveYou from './components/WhyILoveYou';
import OpenWhenSad from './components/OpenWhenSad';
import FutureDreams from './components/FutureDreams';
import ThankYou from './components/ThankYou';
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/cover" element={<CoverPage />} />
        <Route path="/how-we-met" element={<HowWeMet />} />
        <Route path="/best-memories" element={<BestMemories/>} />
        <Route path='/why-i-love-you' element={<WhyILoveYou/>}/>
        <Route path='/open-when-sad' element={<OpenWhenSad/>}/>
        <Route path='/future-dreams' element={<FutureDreams/>} />
        <Route path='/thank-you' element={<ThankYou/>} ></Route>
      </Routes> 
    </Router>
  )
}

export default App;
