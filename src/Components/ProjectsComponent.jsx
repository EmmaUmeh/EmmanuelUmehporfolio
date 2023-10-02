import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { data } from "../utils/data";
import { CiShare1 } from 'react-icons/ci';
import { GoMarkGithub } from 'react-icons/go';

const ProjectsComponent = () => {
    return (
        <div className="projectscontainer">
            <Container>
                <div>
                    <h3 className="project-h3">Project</h3>
                    <span className="mb-5">Over the decades being a software engineer involves building projects and also solving complex problems so as to upskill and also learn while building: Here are some projects that I have built lately.</span>

                    {/* Projects */}
                    <Row>
                        {data?.map((datas) => (
                            <Col key={datas.id} lg={4} md={6} sm={12}>
                                <div className="projectgrid">
                                    <div className="projectchild">
                                        <div className="projectImg">
                                            <img src={datas.image} alt="Project Image" />
                                            <a className="projectlink" href={datas.ImageUrl}>
                                                <h5 className="projecttitle">{datas.title}</h5>
                                            </a>
                                            <span className="projectdescription">{datas.description}</span>
                                            <div className="stackgrid">
                                                <span>{datas.stackOne}</span>
                                                <span>{datas.stackTwo}</span>
                                                <span>{datas.stackThree}</span>
                                            </div>
                                            <div className="visit">
                                                <a className="projectlink" href={datas.GithubUrl}>
                                                    <GoMarkGithub />
                                                </a>
                                                <a className="projectlink" href={datas.ImageUrl}>
                                                    Visit <CiShare1 />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ProjectsComponent;
