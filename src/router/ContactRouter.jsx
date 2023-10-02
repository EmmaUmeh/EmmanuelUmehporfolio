import Footer from "../Components/Footer";
import NavbarComponent from "../Components/NavbarComponent";
import {Navdata} from '../Components/NavbarComponent';


const ContactRouter = () => {
    return(
        <div>
                 <NavbarComponent lists={Navdata}/>
                 <Footer />
        </div>
    )
}

export default ContactRouter;