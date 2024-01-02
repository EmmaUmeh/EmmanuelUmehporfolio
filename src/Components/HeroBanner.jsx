import HireMe from "./HireMe";
import { Container } from 'react-bootstrap';
import ImageUrl from '../assets/emmanuelpics.png';

const HeroBanner = (props) => {
    const Heroitems = [];
    props.Herolists.forEach((Herolist) => {
        const Heroitem =

            <div className="herocontainer" key={Herolist.id}>
                <Container>
                    <div className="herochild">

                        {/* <div className="animate__animated animate__backInLeft">
                             <span className="title">Hi, my name is</span>
                        </div> */}
                        {/* <div className="animate__animated animate__backInLeft descriptionname">
                            {Herolist.descriptionName}
                        </div> */}

                        <div className="animate__animated animate__backInLeft mb-4">
                            <h2 className="descriptiontext">Technical Writer, Frontend Developer & UI Designer</h2>
                        </div>

                        <div className="descriptionjob">
                            {Herolist.descriptionJob}
                        </div>

                        <div className='heroImgcont'>
                                <img src={ImageUrl}  className='heroImage'/>
                            </div>
                        {/* <div className="animate__animated animate__bounceInUp buttonflex">
                            <a href="mailto:Emmachinemerem04@gmail.com">
                                <HireMe buttonText={"Get In Touch"} buttonColor="white" buttonTextColor="black" />
                            </a>

                            <a href="https://drive.google.com/file/d/1bu7A8434njFTJ8_5skcEwZ92w8HK1Cs7/view?usp=drive_link">
                            <HireMe buttonText={"View Resume"} buttonBorderColor="2px solid white" buttonColor="transparent"/>
                            </a>
                        </div> */}
                       
                        
                    </div>
                </Container>
                {/* <hr className="hr"/> */}
            </div>

        Heroitems.push(Heroitem)
    })



    return (
        <div className="Herosection">

            <div>
                {Heroitems}
            </div>
        </div>
    )
}

export const Herodata = [
    {
        id: 0,
        descriptionName: "Emmanuel Umeh",
        descriptionJob: "I code solutions, design, write, and solve problems.",
        descriptionEmail: "Emmachinemerem04@gmail.com",
        descriptionCall: "+234 7019 425976",
        descriptionLocation: "Nigeria, Abuja",
        descriptionHeroimage: "./assets/profile_pic.jpg",
        descriptionAlt: "EmmaImage",
        descriptionGithub: "Github",
        descriptionLinkendin: "Linkedin",
        descriptionTwitter: "Twitter",
        descriptionGithubLink: "https://github.com/EmmaUmeh/",
        descriptionLinkendinLink: "https://www.linkedin.com/in/emmanuel-umeh-35078924b",
        descriptionTwitterLink: "https://twitter.com/ElonLostSon?t=JHr14DG2aCPDEqJMNWLZTA&s=08..."
    }
]

export default HeroBanner;
