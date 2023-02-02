
import React from "react";
import { Container } from "react-bootstrap";

const ProjectsComponent = (props) => {

    const ProjectsArray = [];
    props.projectLists.forEach((projects) => {
        const Projectsitems = 
        <div key={projects.id}>
             <Container>
             <div className="projectscontainer">
                        <h3>
                       {projects.myProjects}
                        </h3>

                        <div>
                            <hr />
                            <span>
                                {projects.comingSoon}
                            </span>
                            <hr />

                            <div>
                              <span> Have any questions or support? Feel free to</span> <a href="https://www.linkedin.com/in/emmanuel-umeh-35078924b">
                               {projects.HaveAnySugestion}
                               </a>
                            </div>
                        </div>
                     </div>
             </Container>
        </div>
        ProjectsArray.push(Projectsitems)



    })
    return(
        <div>
          {ProjectsArray}
        </div>
     )
}



export const Projects = [
    {
        id:0,
        myProjects:"My Projects",
        comingSoon:"Coming Soon",
        HaveAnySugestion:"Ask on Linkedin",
    }
]

export default ProjectsComponent;

