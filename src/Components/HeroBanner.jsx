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
                   <a href={Herolist.descriptionGithubLink}>
                   <span><GoMarkGithub size="30"/><span className="github">{Herolist.descriptionGithub}</span></span>
                   </a>

                    <a href={Herolist.descriptionLinkendinLink}>
                    <span className="">< RiLinkedinBoxFill size="30"/><span  className="github">{Herolist.descriptionLinkendin}</span></span>
                    </a>
                    
                    <a href={Herolist.descriptionTwitterLink}>
                    <span ><RiTwitterFill size="30"/><span  className="github">{Herolist.descriptionTwitter}</span></span>
                    </a>
                    
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
        descriptionAlt:"EmmaImage",
        descriptionGithub:"Github",
        descriptionLinkendin:"Linkedin",
        descriptionTwitter:"Twitter",
        descriptionGithubLink:"https://github.com/EmmaUmeh/",
        descriptionLinkendinLink:"https://www.linkedin.com/in/emmanuel-umeh-35078924b",
        descriptionTwitterLink:"https://twitter.com/Emmanuel_umeh30?t=vkKog_zQcqsV1xEn7iumqg&s=08"
    }
]

export default HeroBanner;