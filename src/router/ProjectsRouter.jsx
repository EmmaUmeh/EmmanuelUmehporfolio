
import NavbarComponent from "../Components/NavbarComponent";
import {Navdata} from '../Components/NavbarComponent';
import {Projects} from "../Components/ProjectsComponent"
import ProjectsComponent from "../Components/ProjectsComponent"

const ProjectsRouter = () => {
 
    return(
        <div>
                 <NavbarComponent lists={Navdata}/>
                <ProjectsComponent projectLists={Projects}/>
            </div>
    )
}

export default ProjectsRouter;

