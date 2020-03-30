//core react
import React, { useState } from "react"

//css
import classes from "./Nav.module.css"

//components
import Navlink from "../../Components/Navlink/Navlink"

//assets
import projects from "../../Assets/Icons/projects.svg"
import projects_selected from "../../Assets/Icons/projects-selected.svg"
import technologies from "../../Assets/Icons/technologies.svg"
import technologies_selected from "../../Assets/Icons/technologies-selected.svg"
import education from "../../Assets/Icons/education.svg"
import education_selected from "../../Assets/Icons/education-selected.svg"
import personal from "../../Assets/Icons/personal.svg"
import personal_selected from "../../Assets/Icons/personal-selected.svg"

const Nav = props => {

    //?states
    const [active_icon, set_active_icon] = useState(props.path)

    return (

            <nav className={classes.nav} onMouseLeave={()=> set_active_icon(props.path)}>

                <Navlink
                    to="/"
                    test-handle="projects-link"
                    text="PROJECTS"
                    img={active_icon === "/" ? projects_selected : projects}
                    handleClick={() => set_active_icon("/")}
                    handleMouseEnter={()=> set_active_icon("/")}
                />

                <Navlink
                    to="/technologies"
                    test-handle="technology-link"
                    text="SKILLS"
                    img={active_icon === "/technologies" ? technologies_selected : technologies}
                    handleClick={() => set_active_icon("/technologies")}
                    handleMouseEnter={()=> set_active_icon("/technologies")}
                />

                <Navlink
                    to="/education"
                    test-handle="education-link"
                    text="EDUCATION"
                    img={active_icon === "/education" ? education_selected : education}
                    handleClick={() => set_active_icon("/education")}
                    handleMouseEnter={()=> set_active_icon("/education")}
                />

                <Navlink
                    to="/about-me"
                    test-handle="personal-link"
                    text="ABOUT ME"
                    img={active_icon === "/about-me" ? personal_selected : personal}
                    handleClick={() => set_active_icon("/about-me")}
                    handleMouseEnter={()=> set_active_icon("/about-me")}
                />

            </nav>

    )

}

export default Nav