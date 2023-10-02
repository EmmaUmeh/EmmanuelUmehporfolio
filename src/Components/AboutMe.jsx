import ImageUrl from '../assets/profile_pic.jpg';
import { VscDebugStart } from 'react-icons/vsc'


const AboutMe = () => {

    const stacks = [
        {icons: <VscDebugStart />, stacker: 'Javascript'},
        {icons: <VscDebugStart />, stacker: 'Typescript'},
        {icons: <VscDebugStart />, stacker: 'React'},
        {icons: <VscDebugStart />, stacker: 'Next.js'},
        {icons: <VscDebugStart />, stacker: 'Python'},
        {icons: <VscDebugStart />, stacker: 'Tailwindcss'},
    ]
    return(
        <>
            <div className="about-container">
                    <div className='about-child'>
                        <div>
                            <h4 className='about-me'>ABOUT ME</h4>
                                <p className='aboutparagraphOne'>
                                    Hi, i am Emanuel Umeh, a seasoned developer who loves to break the dilemma of codes, i solve real world problems that brings solution to the world.
                                </p>

                                <p className='aboutparagraphTwo'>
                                    I started early 2021, before venturing into tech i have had this calling to become an engineer but not knowing where to fall into #lol😅. So i started by attending a 3 months coding class which was not for the weak😂 to cut the story short am grateful for where am i today. 
                                </p>

                                <span>Here are a few technologies I’ve worked on:</span>

                                <div className='stacks'>
        
                                        {
                                            stacks.map((stack, index) => {
                                                return(
                                                    <div className='stacks-child' key={index}>
                                                        <span className='stack-icons'>{stack.icons}</span>
                                                        <span className='stack-title'>{stack.stacker}</span>
                                                    </div>
                                                )
                                            })
                                        }
            
                                </div>
                        </div>

                        <div className='aboutImg'>
                            <img src={ImageUrl}  className='aboutimgborderRaduis'/>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default AboutMe;