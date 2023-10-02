import React from 'react';
import NavbarComponent from './Components/NavbarComponent';
import { Navdata } from './Components/NavbarComponent';
import { Routes, Route } from 'react-router-dom';
import AboutRouter from './router/AboutRouter';
import ProjectsRouter from './router/ProjectsRouter';
import HomeRouter from './router/HomeRouter';
// import ContactRouter from './router/ContactRouter';


function App() {
  return (
    <div>
      <NavbarComponent lists={Navdata} />
      {/* <ProjectsRouter projectsList={Projects}/> */}
      <Routes>
      <Route path="/" element={<HomeRouter />}></Route>
        <Route path="/about" element={<AboutRouter />}></Route>
        {/* <Route path="/Contact" element={<ContactRouter />}></Route> */}
        <Route path="/projects" element={<ProjectsRouter />}></Route>
      </Routes>



    </div>
  );
}





export default App;
