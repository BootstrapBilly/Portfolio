//core react
import React from "react"

//css
import classes from "./Project_content.module.css"

//Assets

const Project = props => {
    
    return (

        <div className={classes.container}>

            {props.selected_tab === 0 ? <img className={classes.image} src={props.image_source} alt="Screenshot of project"/>
            
            : props.selected_tab === 1 ? <div className={classes.notes}>{props.notes}</div>
            
            : "Github"}

        </div>

    )

}

export default Project