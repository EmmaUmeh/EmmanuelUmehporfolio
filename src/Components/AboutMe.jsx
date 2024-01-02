import ImageUrl from '../assets/emma.jpg';
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
                        <div className="animate__animated animate__backInLeft aboutchildTwo">
                            <h4 className='about-me'>Hi, I'm Emmauel. Pleasure to connect with you.</h4>
                                <p className='aboutparagraphOne'>
                                   A seasoned developer who loves to break the dilemma of codes, i solve real world problems that brings solution to the world. My focus over the years has been on crafting and engineering solutions that prioritize making a positive impact on the world.
                                </p>

                                <p className='aboutparagraphTwo'>
                                    
                                </p>

                                <span>Here are a few technologies I’ve worked with lately:</span>

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
                    </div>
            </div>
        </>
    )
}

export default AboutMe;