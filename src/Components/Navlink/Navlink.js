//core react
import React from "react"

//external
import { Link } from "react-router-dom"

//css
import classes from "./Navlink.module.css"

const Navlink = props => {


    return (

        <div className={classes.container} onClick={props.handleClick}>

            <Link to={props.to} test-handle={props.test_handle} style={{ textDecoration: 'none' }}>

                <div className={classes.iconWrapper}>
                    <img className={classes.icon} src={props.img} alt="A Navigation icon"/>
                </div>

                <span className={classes.link_text}>{props.text}</span>
                
            </Link>

        </div>

    )

}

export default Navlink