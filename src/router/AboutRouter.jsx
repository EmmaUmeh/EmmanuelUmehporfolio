import HeroBanner from "../Components/HeroBanner";
import { Herodata } from "../Components/HeroBanner";
import NavbarComponent from "../Components/NavbarComponent";
import {Navdata} from '../Components/NavbarComponent';
const AboutRouter = () => {
    return(
        <div>
            <NavbarComponent lists={Navdata}/>
            <HeroBanner Herolists={Herodata}/>
        </div>
    )
}

export default AboutRouter;