import React from "react"

import classes from "./Profile.module.css"

//components
import Nav from "../../Containers/Nav/Nav"

//assets
import image from "../../Assets/Img/me-croped-small.png"
// eslint-disable-next-line
import image_big from "../../Assets/Img/me-croped.png"

const Profile = props => {

    return (
        <div className={classes.container}>

            <div className={classes.top_section}>


                <img className={classes.image} src={image} alt="A Navigation icon" />
                <img className={classes.image_big} src={image} alt="A Navigation icon" />

                <div className={classes.caption}>

                    <span className={classes.name}>Billy Catchpole</span>
                    <span className={classes.email}>Billyjcatchpole@gmail.com</span>

                </div>

            </div>

            <div className={classes.bottom_section}>

                <p className={classes.text}>Billy is a full-stack JavaScript engineer who enjoys building complex mobile and web applications.</p>
                <p className={classes.text}>While his degree provides a broad spectrum of software engineering knowledge, his self-taught experience with modern technology comes from his passion for all things web.</p>

            </div>

            <Nav path={props.location.pathname} />


        </div>
    )

}

export default Profile