//core react
import React from "react"

//css
import classes from "./Projects.module.css"

//components
import Nav from "../../Containers/Nav/Nav"

const Home = props => {

    return (

        <div className={classes.container}>   

            <Nav path={props.location.pathname}/>
            Projects
        </div>

    )

}

export default Home