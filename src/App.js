import React from 'react';
import About from './Components/About';
import Contact_us from './Components/Contact_us';
import Navbar from './Components/Navbar';
import Eror from './Components/Eror';
import Home from './Components/Home';
import {Routes, Route, Link } from "react-router-dom";



const App = () => {
  return (
    <div>
    <Routes>
      <Route exact path='/'  Component={Navbar}/>
      <Route exact path='/home'  Component={Home}/>
      <Route exact path='/about-us' Component={About}/>
      <Route exact path='/contact-us' Component={Contact_us}/>
      <Route Component={Eror}/>
    </Routes>
    {/* <Contact_us/>
      <About/> */}

    </div>
  )
}

export default App
