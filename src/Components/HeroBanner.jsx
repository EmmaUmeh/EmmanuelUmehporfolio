import HireMe from "./HireMe";
import { Container } from 'react-bootstrap';

const HeroBanner = (props) => {
    const Heroitems = [];
    props.Herolists.forEach((Herolist) => {
        const Heroitem =

            <div className="herocontainer" key={Herolist.id}>
                <Container>
                    <div className="herochild">

                        <span className="title">Hi, my name is</span>
                        <div className="descriptionname">
                            {Herolist.descriptionName}
                        </div>

                        <div>
                            <h4 className="descriptiontext">I Love building softwares that solve crazy solutions.</h4>
                        </div>

                        <div className="descriptionjob">
                            {Herolist.descriptionJob}
                        </div>

                        <div className="buttonflex">
                            <a href="mailto:Emmachinemerem04@gmail.com">
                                <HireMe buttonText={"Get In Touch"} buttonColor="white" buttonTextColor="black" />
                            </a>

                            <a href="https://docs.google.com/document/d/e/2PACX-1vT57QceOyVq4uxZCsHCzLLO-7JwlutKEcvVVeiVNEF-8FGAzz4FYqJKyQUql0m5wJhqdyD8na0_kZ5F/pub">
                            <HireMe buttonText={"View Resume"} buttonBorderColor="2px solid white" buttonColor="transparent"/>
                            </a>
                        </div>
                       
                        
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
        descriptionName: "Emmanuel Umeajaghaku",
        descriptionJob: "I'm a Software envagelist who drafts technical articles, maintain responsive Ui designs, blockchain enthusiast & a team player with an eye for detail.",
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