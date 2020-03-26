//core react
import React from "react"

//css
import classes from "./SkillCard.module.css"



const SkillCard = props => {

    return (

        <div className={classes.container}>

            <div className={classes.title_container}>

                <span className={classes.title} style={{color:props.color}}>{props.title}</span>

            </div>

            <div className={classes.icon_container}>

                <img className={classes.icon} src={props.icon_name} alt="A Navigation icon" />

            </div>

        </div>

    )

}

export default SkillCard