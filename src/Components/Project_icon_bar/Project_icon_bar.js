//core react
import React from "react"

//css
import classes from "./Project_icon_bar.module.css"

import github from "../../Assets/Icons/github.svg"
import livesite from "../../Assets/Icons/livesite.svg"

const Project_icon_bar = props => {

    return (

        <div className={classes.footer_container}>
            
            <img className={classes.icon} src={github} alt="A github icon" onClick={props.handleClickGithub} />
            <img className={classes.icon} src={livesite} alt="A Notes icon" onClick={props.handleClickLive} />


        </div>

    )

}

export default Project_icon_bar