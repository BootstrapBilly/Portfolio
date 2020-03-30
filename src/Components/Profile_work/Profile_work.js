//core react
import React from "react"

//css
import classes from "./Profile_work.module.css"

const Profile_work = props => {

    return (

            <div className={classes.container}>
                
                <p className={classes.text}>Billy is a full-stack JavaScript engineer who enjoys building complex mobile and web applications.</p>
                <p className={classes.text}>While his degree provides a broad spectrum of software engineering knowledge, his self-taught experience with modern technology comes from his passion for all things web.</p>

            </div>

    )

}

export default Profile_work