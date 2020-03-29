//core react
import React from "react"

//css
import classes from "./Project_icon_bar.module.css"

import github from "../../Assets/Icons/github.svg"
import notes from "../../Assets/Icons/notes.svg"
import gallery from "../../Assets/Icons/gallery.svg"

const Project_icon_bar = props => {

    return (

        <div className={classes.footer_container}>

            <img className={classes.icon} src={gallery} alt="A Gallery icon" onClick={props.handleClickIcon.bind(this, 0)}/>
            <img className={classes.icon} src={notes} alt="A Notes icon" onClick={props.handleClickIcon.bind(this, 1)}/>
            <img className={classes.icon} src={github} alt="A github icon" onClick={props.handleClickGithub}/>

        </div>

    )

}

export default Project_icon_bar