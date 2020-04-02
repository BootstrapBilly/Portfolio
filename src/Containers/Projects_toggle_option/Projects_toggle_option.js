import React from "react"

import classes from "./Projects_toggle_option.module.css"

import check from "../../Assets/Icons/check.svg"

const ToggleOption = props => {

    let check_icon = null

    if (props.options.find(item => item === props.text)) check_icon = <img className={classes.check_icon} src={check} alt="A check icon" />

    return (

        <div className={classes.container}>

            <div className={classes.check_box} onClick={props.on_check.bind(this, props.text)}>

                {check_icon}

            </div>

            <span className={classes.text}>{props.text}</span>

        </div>

    )
}

export default ToggleOption