//core react
import React from "react"

//css
import classes from "./Bottom_section.module.css"

//components
import ProfileWork from "../../Containers/Profile_work/Profile_work"
import ProfileContact from "../../Containers/Profile_contact/Profile_contact"

const Bottom_section = props => {

    return (

            <div className={classes.container}>
                
                {props.selected === 0 ? <ProfileWork/> : <ProfileContact/>}

            </div>

    )

}

export default Bottom_section