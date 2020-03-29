//core react
import React from "react"

//css
import classes from "./Projects.module.css"

//components
import Nav from "../../Containers/Nav/Nav"
import Project from "../../Containers/Project/Project"

//assets
import diary_photo from "../../Assets/Img/diary-screenshot.jpg"
import window_cleaning_photo from "../../Assets/Img/window_cleaning.jpg"

const Projects = props => {

    return (

        <div className={classes.container}>

            <Nav path={props.location.pathname} />

            <Project image_source={diary_photo}
                title="Appointment Manager"
                notes="Notes"
                handleClickGithub={() => window.open("https://github.com/BootstrapBilly/1to1", "_blank")} />
            <Project image_source={window_cleaning_photo}
                title="Window Cleaning Planner"
                notes="Notes"
                handleClickGithub={() => window.open("https://github.com/BootstrapBilly/1to1", "_blank")} />
            
            <Project />
            <Project />

        </div>

    )

}

export default Projects