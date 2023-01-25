
import {Container} from 'react-bootstrap'

function NavbarComponent(props){
    const NavList  = props.lists.map((list) => (  
         <div className="Navcontainer" key={list.id}>
           <Container>
            <div className="logoimage">
                <img src={list.LogoImagUrl} alt={list.LogoImagAlt}/>
            </div>

            <div className="flex">
                <div>
                    {list.AboutLinks}
                </div>

                <div>
                    {list.Projects}
                </div>

                <div>
                   {list.ResumeLink}
                </div>

                <div>
                    {list.ContactLinks}
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
        ResumeLink:"Resume",
       ContactLinks:'Contact',
       
    }
 ];


//  <NavbarComponent lists={Nadata}/>
  
export default NavbarComponent;

