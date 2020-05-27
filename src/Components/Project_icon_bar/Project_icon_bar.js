//core react
import React from "react"

//css
import classes from "./Project_icon_bar.module.css"

import github from "../../Assets/Icons/github.svg"
import website from "../../Assets/Icons/website.svg"

const Project_icon_bar = props => {



    return (

        <div className={classes.container}>

            <div className={classes.icon_container} style={{visibility:props.noGallery ? "hidden" : "visible"}} onClick={props.on_web_click}>

                <img className={classes.icon} src={website} alt="A gallery icon"
    />
                <span className={classes.icon_text}>Website</span>

            </div>

            <div className={classes.icon_container}>

                <img className={classes.icon} src={github} alt="A github icon"  onClick={props.on_github_click} />
                <span className={classes.icon_text}>Github</span>

            </div>


        </div>

    )

}

export default Project_icon_bar