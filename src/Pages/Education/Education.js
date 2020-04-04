import React from "react"

import classes from "./Education.module.css"

//components
import Nav from "../../Containers/Nav/Nav"
import Timeline from "../../Components/Education_timeline/Education_timeline"

const Education = props => {

    return (

        <div className={classes.container}>

            <Nav path={props.location.pathname} />

            <Timeline />
            
        </div>
    )
}

export default Education