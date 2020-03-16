//core react
import React from "react"

//external
import { Link } from "react-router-dom"

//css
import classes from "./Navlink.module.css"

const Navlink = props => {

    return (

        <div className={classes.container} onClick={props.handleClick}>

            <Link to={props.to} test-handle={props.test_handle}>

                <span className={classes.navlink}>{props.text}</span>

                <div className={classes.iconWrapper}>
                    <img className={classes.icon} src={props.img} alt="A Navigation icon"/>
                </div>

            </Link>

        </div>

    )

}

export default Navlink