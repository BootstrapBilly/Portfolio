//core react
import React from "react"

//css
import classes from "./Project_icon_bar.module.css"

import github from "../../Assets/Icons/github.svg"
import livesite from "../../Assets/Icons/livesite.svg"
import notes from "../../Assets/Icons/notes.svg"
import gallery from "../../Assets/Icons/gallery.svg"

const Project_icon_bar = props => {



    return (

        <div className={classes.footer_container}>

            <div className={classes.icon_container}>

                <img className={classes.icon} src={props.active_section === "gallery" ? notes : gallery} alt="A notes icon"
                    onClick={props.active_section === "gallery" ? props.change_active_section.bind(this, "notes") : props.change_active_section.bind(this, "gallery")} />
                <span className={classes.icon_text}>{props.active_section === "gallery" ? "NOTES" : "GALLERY"}</span>

            </div>

            <div className={classes.icon_container}>

                <img className={classes.icon} src={github} alt="A github icon" onClick={props.handleClickGithub} />
                <span className={classes.icon_text}>GITHUB</span>

            </div>

            <div className={classes.icon_container}>

                <img className={classes.icon} src={livesite} alt="A Notes icon" onClick={props.handleClickLive} />
                <span className={classes.icon_text}>WEBSITE</span>

            </div>




        </div>

    )

}

export default Project_icon_bar