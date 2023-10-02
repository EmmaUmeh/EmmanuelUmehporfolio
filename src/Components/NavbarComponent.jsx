import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiMenuAlt2, HiX } from 'react-icons/hi'
import { GoMarkGithub } from 'react-icons/go';
// import { } from "react-icons/ri";
import { RiTwitterFill, RiLinkedinBoxFill } from "react-icons/ri";

function NavbarComponent(props) {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle)
    const NavList = props.lists.map((list) => (
        <div className="Navcontainer" key={list.id}>
            <Container>
                <div className='linksflex'>
                    <div className="roundlogo">E</div>
                    <div className={toggle ? "Navchild" : "Navchild expanded"}>

                        <div className="Navsubchild">

                            <Link to="/" onClick={handleToggle} className="Aboutlink">
                                <div className="abt">
                                    {list.HomeLinks}
                                </div>
                            </Link>

                            <Link to="/about" onClick={handleToggle} className="Aboutlink">
                                <div className="abt">
                                    {list.AboutLinks}
                                </div>
                            </Link>

                            <Link to="/Projects" onClick={handleToggle} className="Projectlink">
                                <div className="abt">
                                    {list.Projects}
                                </div>
                            </Link>

                            <a href="https://emmanuelumeh.hashnode.dev/" onClick={handleToggle} className="Projectlink">
                                <div className="abt">
                                   
                                   {list.BlogLinks}
                                </div>
                            </a>

                            <div className="mt-4 herocontactlinksresponsive">
                                <a href="https://github.com/EmmaUmeh/">
                                    <span><GoMarkGithub size="27" color='white' /></span>
                                </a>

                                <a href="https://www.linkedin.com/in/emmanuel-umeh-35078924b">
                                    <span >< RiLinkedinBoxFill size="27" color='white' /></span>
                                </a>

                                <a href="https://twitter.com/algocodeman">
                                    <span ><RiTwitterFill size="27" color='white' /></span>
                                </a>

                            </div>
                        </div>

                    </div>

                    <div className="herocontactlinks">
                        <a href="https://github.com/EmmaUmeh/">
                            <span><GoMarkGithub size="27" color='white' /><span className="github"></span></span>
                        </a>

                        <a href="https://www.linkedin.com/in/emmanuel-umeh-35078924b">
                            <span className="">< RiLinkedinBoxFill size="27" color='white' /><span className="github"></span></span>
                        </a>

                        <a href="https://twitter.com/algocodeman">
                            <span ><RiTwitterFill size="27" color='white' /><span className="github"></span></span>
                        </a>

                    </div>
                    <div className="menubtn">
                        <button onClick={handleToggle}>
                            {
                                toggle ? <HiX size="40" color='white' />
                                    : <HiMenuAlt2 size="40" color='white' />
                            }
                        </button>
                    </div>
                </div>
            </Container>

        </div>
    ));

    return (
        <div>
            {NavList}
        </div>
    )

}

export const Navdata = [
    {
        id: 0,
        ImageUrl: "./assets/profile_pics.jpg",
        ImageAlt: "Logoimage",
        HomeLinks: 'Home',
        AboutLinks: 'About',
        BlogLinks: 'Blog',
        Projects: 'Projects',
        ContactLinks: 'Contact',

    }
];


export default NavbarComponent;

