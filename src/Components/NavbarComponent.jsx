
import {Container} from 'react-bootstrap';
import {MdOutlineLightMode} from 'react-icons/md';
import { Link } from 'react-router-dom';


function NavbarComponent(props){
    const NavList  = props.lists.map((list) => (  
         <div className="Navcontainer" key={list.id}>
            <Container>
            <div className="Navchild">
            <div className="logoimage">
                <img src={list.LogoImagUrl} alt={list.LogoImagAlt}/>
            </div>

            <div className="Linksholder d-flex">
              
              <Link to="/" className="Aboutlink">
              <div>
                    {list.AboutLinks}
                </div>
              </Link>

               <Link to="/Contact" className="Projectlink">
               <div>
                    {list.Projects}
                </div>
               </Link>

              <Link to="/Resume" className="Resumelink">
              <div>
                   {list.ResumeLink}
                </div>
              </Link>

              <Link to="/Projects" className="Contactlink">
              <div>
                    {list.ContactLinks}
                </div>
              </Link>

                
            
            </div>


            <div>
                <MdOutlineLightMode size="30"/>
            </div>
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
        LogoImagUrl:'./assets/Frame.png',
        LogoImagAlt:'LogoImage',
        AboutLinks:'About',
        Projects:'Projects',
        ResumeLink:'Resume',
       ContactLinks:'Contact',
       
    }
 ];


//  <NavbarComponent lists={Nadata}/>
  
export default NavbarComponent;

