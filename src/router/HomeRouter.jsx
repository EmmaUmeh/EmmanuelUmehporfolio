

import ProjectsComponent from "../Components/ProjectsComponent";
import { Herodata } from "../Components/HeroBanner";
import HeroBanner from "../Components/HeroBanner";
import AboutMe from "../Components/AboutMe";
import Footer from "../Components/Footer";

const HomeRouter = () => {
 
    return(
        <div>
                 {/* <NavbarComponent lists={Navdata}/> */}
                 <HeroBanner Herolists={Herodata}/>
                 <AboutMe />
                <ProjectsComponent />
                <Footer />
            </div>
    )
}

export default HomeRouter;

