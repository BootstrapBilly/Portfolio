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
import blog from "../../Assets/Icons/blog.svg"
import blog_selected from "../../Assets/Icons/blog-selected.svg"

const Nav = props => {

    //?states
    const [active_icon, set_active_icon] = useState(props.path)

    return (

        <nav className={classes.nav} onMouseLeave={() => set_active_icon(props.path)}>

            <Navlink
                to="/projects"
                test-handle="projects-link"
                text="PROJECTS"
                img={active_icon === "/projects" ? projects_selected : projects}
                handleClick={() => set_active_icon("/projects")}

            />

            <Navlink
                to="/blog"
                test-handle="blog-link"
                text="BLOG"
                img={active_icon === "/blog" ? blog_selected : blog}
                handleClick={() => set_active_icon("/blog")}

            />

            <Navlink
                to="/technologies"
                test-handle="technology-link"
                text="SKILLS"
                img={active_icon === "/technologies" ? technologies_selected : technologies}
                handleClick={() => set_active_icon("/technologies")}

            />

            <Navlink
                to="/education"
                test-handle="education-link"
                text="EDUCATION"
                img={active_icon === "/education" ? education_selected : education}
                handleClick={() => set_active_icon("/education")}

            />

        </nav>

    )

}

export default Nav