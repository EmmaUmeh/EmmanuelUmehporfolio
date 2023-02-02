import React from 'react';
import './App.css';
import NavbarComponent from './Components/NavbarComponent';
import {Navdata} from './Components/NavbarComponent';

import { Routes, Route} from  'react-router-dom';
import AboutRouter from './router/AboutRouter';
import ProjectsRouter from './router/ProjectsRouter';
import ContactRouter from './router/ContactRouter';


function App() {
  return (
    <div>
     <NavbarComponent lists={Navdata}/>
    
     


<Routes>

        <Route path="/" element={<AboutRouter />}></Route>
        <Route path="/Contact" element={<ContactRouter />}></Route>
        <Route path="/Projects" element={<ProjectsRouter />}></Route>
</Routes>


     
    </div>
  );
}



 

export default App;
