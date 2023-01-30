// import HeroBanner from "../Components/HeroBanner";
// import NavbarComponent from "../Components/NavbarComponent";
import { Herodata } from '../Components/HeroBanner';
import HeroBanner from "../Components/HeroBanner";

const HomeRouter = () => {
    return(
        <div>
            
            {/* <NavbarComponent /> */}
            <HeroBanner Herolists={Herodata}/>
        </div>
    )
}

export default HomeRouter;