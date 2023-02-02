import React,{ useState } from 'react';
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {HiMenuAlt2, HiX} from 'react-icons/hi'


function NavbarComponent(props){
    const [toggle,setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle)
    const NavList  = props.lists.map((list) => (  
         <div className="Navcontainer" key={list.id}>
            <Container>
            <Link to="/">
                <div className="imageUrl">
                    <img src={list.ImageUrl} alt={list.ImageAlt}/>
                </div>
            </Link>
            <div className={toggle ? "Navchild" : "Navchild expanded"}>

            <div className="Navsubchild">
         

         
              

           <Link to="/About"  onClick={handleToggle} className="Aboutlink">
           <div className="abt">
                 {list.AboutLinks}
             </div>
           </Link>

            <Link to="/Contact"  onClick={handleToggle} className="Projectlink">
            <div className="abt">
                 {list.Projects}
             </div>
            </Link>

            {/* <a href="./assets/Emmanuel Umeajaghaku Chinemerem.pdf" download className="Resumelink">
           
           <div className="abt">
                {list.ResumeLink}
                    
             </div>
           </a> */}

           <Link to="/Projects"  onClick={handleToggle} className="Contactlink">
           <div className="abt">
                 {list.ContactLinks}
             </div>
           </Link>

             
         
     


        
         </div>
     
            </div>

     
            <div className="menubtn">
                <button onClick={handleToggle}>
                    {
                        toggle ? <HiX size="40"/>
                        :  <HiMenuAlt2 size="40"/>
                    }
                    </button>
          </div>
           </Container>
            
        </div>
    ));

    return(
        <div>
            {NavList}
        </div>
    )

}

export const Navdata = [
    {
        id:0,
        ImageUrl:"./assets/Frame.png",
        ImageAlt:"Logoimage",
        AboutLinks:'About Me',
        Projects:'Projects',
       ContactLinks:'Contact',
       
    }
 ];

  
export default NavbarComponent;

