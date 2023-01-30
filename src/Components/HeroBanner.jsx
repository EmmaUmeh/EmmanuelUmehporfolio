import HireMe from "./HireMe";
import {RiMailDownloadLine} from 'react-icons/ri';
import {BiPhoneCall} from 'react-icons/bi';
import {GoLocation,GoMarkGithub} from 'react-icons/go';
// import { } from "react-icons/ri";
import { RiTwitterFill, RiLinkedinBoxFill } from "react-icons/ri";

const HeroBanner = (props) => {
    const Heroitems = [];
    props.Herolists.forEach((Herolist) => {
        const Heroitem = 
        <div className="herocontainer" key={Herolist.id}>

            <div className="herochild">
            <HireMe />
            <div className="descriptionname">
                {Herolist.descriptionName}
                </div>

                <div className="descriptionjob">
                    {Herolist.descriptionJob}
                </div>

                <div className="heroaddress">

                        <div className="pb-2">
                        <span><RiMailDownloadLine/></span> <span className="">{Herolist.descriptionEmail}</span>
                        </div>

                        <div className="pb-2">
                        <span><BiPhoneCall/></span>  {Herolist.descriptionCall}
                        </div>

                        <div>
                        <span><GoLocation /></span>  {Herolist.descriptionLocation}
                        </div>
                </div>
                

                <div className="mt-4 herocontactlinks">
                    <span className=""><GoMarkGithub size="20"/></span>
                    <span className="">< RiLinkedinBoxFill size="20"/></span>
                    <span ><RiTwitterFill size="20"/></span>
                    
                </div>
            </div>



                <div className="Heroimg">
                    <img src={Herolist.descriptionHeroimage} alt={Herolist.descriptionAlt}/>
                </div>
        </div>
        Heroitems.push(Heroitem)
    })



return(
    <div className="Herosection">
       
       <div>
        {Heroitems}
       </div>
    </div>
)
}

export const Herodata = [
    {
        id:0,
        descriptionName:"Emmanuel Umeh",
        descriptionJob:"Frontend Developer",
        descriptionEmail:"Emmachinemerem04@gmail.com",
        descriptionCall:"+234 7019 425976",
        descriptionLocation:"Nigeria, Abuja",
        descriptionHeroimage:"./assets/Heroimage.png",
        descriptionAlt:"EmmaImage"
    }
]

export default HeroBanner;