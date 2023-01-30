import NavbarComponent from "../Components/NavbarComponent";
import {Navdata} from '../Components/NavbarComponent';

const ProjectsRouter = () => {
    return(
        <div>
                 <NavbarComponent lists={Navdata}/>
            </div>
    )
}

export default ProjectsRouter;