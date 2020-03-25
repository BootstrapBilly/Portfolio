//core react
import React from "react"

//css
import classes from "./AboutMe.module.css"

//components
import Nav from "../../Containers/Nav/Nav"

const AboutMe = props => {

    return (

        <div className={classes.container}>   

            <Nav path={props.location.pathname}/>
            Meh
        </div>

    )

}

export default AboutMe