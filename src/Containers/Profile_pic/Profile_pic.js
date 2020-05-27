import React from 'react'

import classes from "./Profile_pic.module.css"

//assets
import PPBG from "../../Assets/Img/profilepic.svg"

export const Profile_pic = () => {

    return (

        <div className={classes.container}>
            
            <img src={PPBG} alt="Vector graphic" className={classes.ppbg}/>

        </div>

    )

}

export default Profile_pic