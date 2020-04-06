import React from "react"

import classes from "./Project_tag.module.css"

const Tag = props => {

    return (

            <div className={classes.text} style={{animationDuration:props.anim_duration}}>{props.text}</div>
     
    )

}

export default Tag