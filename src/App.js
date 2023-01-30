import React from 'react';
import './App.css';
import NavbarComponent from './Components/NavbarComponent';
import {Navdata} from './Components/NavbarComponent';

import { Routes, Route} from  'react-router-dom';
import AboutRouter from './router/AboutRouter';
import ProjectsRouter from './router/ProjectsRouter';
import ResumeRouter from './router/ResumeRouter';
import ContactRouter from './router/ContactRouter';
import HomeRouter from './router/HomeRouter';


function App() {
  return (
    <div>
     <NavbarComponent lists={Navdata}/>
    
     


<Routes>
        <Route path="/" element={<HomeRouter />}></Route>
        <Route path="/About" element={<AboutRouter />}></Route>
        <Route path="/Contact" element={<ContactRouter />}></Route>
        <Route path="/Resume" element={<ResumeRouter />}></Route>
        <Route path="/Projects" element={<ProjectsRouter />}></Route>
</Routes>


     
    </div>
  );
}



 

export default App;
