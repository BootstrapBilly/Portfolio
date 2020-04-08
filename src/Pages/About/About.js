import React from "react"

import classes from "./About.module.css"

//external
import Typed from 'react-typed'

import Nav from "../../Containers/Nav/Nav"

//assets
import email from "../../Assets/Icons/email.svg"

const About = props => {

    return (

        <div className={classes.container}>

                <Typed className={classes.text}
                    strings={[`Billy is a full-stack JavaScript developer from Chelmsford, Essex.`]}
                    typeSpeed={30}
                    startDelay={1000}
                    showCursor={false}
                />

                <Typed className={[classes.text, classes.light_text].join(" ")}
                    strings={[`He enjoys building complex web and mobile applications using the latest technologies.`]}
                    typeSpeed={30}
                    startDelay={5500}
                    showCursor={false}
                />

                <Typed className={classes.text}
                    strings={[`While his software engineering experience comes from university, his web development skills are self taught.`]}
                    typeSpeed={30}
                    startDelay={10500}
                    showCursor={false}
                />

                <div className={classes.email_container}>

                    <img className={classes.icon} src={email} alt="A Navigation icon" />
                    <span className={classes.email}>Billyjcatchpole@gmail.com</span>

                </div>


            <Nav path={props.location.pathname} />

        </div>

    )

}

export default About