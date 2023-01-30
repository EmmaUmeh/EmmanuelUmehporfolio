import NavbarComponent from "../Components/NavbarComponent";
import {Navdata} from '../Components/NavbarComponent';
const AboutRouter = () => {
    return(
        <div>
            <NavbarComponent lists={Navdata}/>
        </div>
    )
}

export default AboutRouter;