//core react
import React from "react"

//css
import classes from "./Project_icon_bar.module.css"

import github from "../../Assets/Icons/github.svg"
import gallery from "../../Assets/Icons/gallery.svg"

const Project_icon_bar = props => {



    return (

        <div className={classes.footer_container}>

            <div className={classes.icon_container}>

                <img className={classes.icon} src={gallery} alt="A gallery icon"
    />
                <span className={classes.icon_text}>GALLERY</span>

            </div>

            <div className={classes.icon_container}>

                <img className={classes.icon} src={github} alt="A github icon" onClick={props.handleClickGithub} />
                <span className={classes.icon_text}>GITHUB</span>

            </div>


        </div>

    )

}

export default Project_icon_bar