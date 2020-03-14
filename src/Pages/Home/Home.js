//core react
import React from "react"

//css
import classes from "./Home.module.css"

//components
import Nav from "../../Components/Nav/Nav"

const Home = props => {

    return (

        <div className={classes.container}>   

            <Nav />
            
        </div>

    )

}

export default Home