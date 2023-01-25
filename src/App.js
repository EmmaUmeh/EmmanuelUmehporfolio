import React from 'react';
import './App.css';
import NavbarComponent from './Components/NavbarComponent';
import {Navdata} from './Components/NavbarComponent';
import { Routes, Route} from  'react-router-dom';
import AboutRouter from './router/AboutRouter';
import ProjectsRouter from './router/ProjectsRouter';
import ResumeRouter from './router/ResumeRouter';
import ContactRouter from './router/ContactRouter';

function App() {
  return (
    <div>
     <NavbarComponent lists={Navdata}/>

     
      <Routes>
        <Route to="/" element={<AboutRouter />}></Route>
        <Route to="/Contact" element={<ContactRouter />}></Route>
        <Route to="/Resume" element={<ResumeRouter />}></Route>
        <Route to="/Projects" element={<ProjectsRouter />}></Route>
      </Routes>
     
    </div>
  );
}



 

export default App;
