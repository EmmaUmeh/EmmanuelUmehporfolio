
import './App.css';
import NavbarComponent from './Components/NavbarComponent';
// import NavbarComponent from './Components/NavbarComponent';
import {Navdata} from './Components/NavbarComponent'

function App() {
  return (
    <div>
     <NavbarComponent lists={Navdata}/>
    </div>
  );
}



 

export default App;
