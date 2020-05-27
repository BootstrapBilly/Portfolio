import React, {useState} from 'react'

import classes from "./Landing.module.css"

//assets
import ProfilePic from "../../Containers/Profile_pic/Profile_pic"

//external
import { Redirect } from 'react-router'

export const Landing = () => {

    const [redirect, set_redirect] = useState(false)

    return (

        <div className={classes.container}>

            <div className={classes.image_wrapper}>

                <ProfilePic />

            </div>

            <div className={classes.text_wrapper}>

                <div className={classes.text}>Hi I'm <span className={classes.highlighted}>Billy</span>, a MERN stack developer from <span className={classes.highlighted}>Chelmsford</span>, Essex.</div>

            </div>

            <div className={classes.button} onClick={()=> set_redirect(true)}>FIND OUT MORE</div>

            {redirect && <Redirect to="/projects" />}

        </div>

    )

}

export default Landing
