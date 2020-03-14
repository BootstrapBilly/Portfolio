//core react
import React from "react"

//css
import classes from "./Nav.module.css"

//components
import Navlink from "../Navlink/Navlink"

//assets
import Home from "../../Assets/Icons/home.svg"
import Projects from "../../Assets/Icons/projects.svg"
import Technologies from "../../Assets/Icons/technologies.svg"
import Education from "../../Assets/Icons/education.svg"

const Header = props => {

    return (

        <nav className={classes.nav}>

            <Navlink to="/" test-handle="home-link" text="HOME" img={Home}/>
            <Navlink to="/projects" test-handle="projects-link" text="PROJECTS" img={Projects}/>
            <Navlink to="/technologies" test-handle="technology-link" text="TECHNOLOGIES" img={Technologies}/>
            <Navlink to="/education" test-handle="education-link" text="EDUCATION" img={Education} />

        </nav>

    )

}

export default Header