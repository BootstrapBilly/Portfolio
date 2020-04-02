import React, { useState } from "react"

import classes from "./Projects_toggle_container.module.css"

//components
import ToggleOption from "../Projects_toggle_option/Projects_toggle_option"

//assets
import close from "../../Assets/Icons/close.svg"

const ToggleContainer = props => {

    const [options, set_options] = useState([])

    const handle_toggle_option = option => {

        options.find(item => item === option) ?

            set_options(options => [...options.filter(item => item !== option)])

            : set_options(options => [...options, option])
    }

    return (

        <div className={classes.container} style={{ display: props.filters_open ? "block" : "none" }}>

            <img className={classes.close_icon} src={close} alt="A Navigation icon" onClick={props.handle_close_button} />

            {

                ["Full-stack", "Back-end", "Front-end", "Project Planning", "Data structures and algorithms"]

                    .map(option_name =>

                        <ToggleOption

                            text={option_name}
                            on_check={(selected_option) => handle_toggle_option(selected_option)}
                            options={options}

                        />)

            }

            <div className={classes.apply_button_container}>

                <div className={classes.apply_button} onClick={props.handle_apply_press.bind(this, options)}>APPLY FILTERS</div>

            </div>

        </div>

    )
}

export default ToggleContainer