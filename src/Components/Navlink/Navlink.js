//core react
import React from "react"

//external
import { Link } from "react-router-dom"

//css
import classes from "./Navlink.module.css"

const Navlink = props => {


    return (

        <div className={classes.container} onClick={props.handleClick}             
        onMouseEnter={props.handleMouseEnter}
        onMouseLeave={props.handleMouseLeave}>

            <Link to={props.to} test-handle={props.test_handle} style={{ textDecoration: 'none' }}>

                <div className={classes.iconWrapper}>
                    <img className={classes.icon} src={props.img} alt="A Navigation icon"/>
                    <span className={classes.link_text}>{props.text}</span>
                </div>

                
                
            </Link>

        </div>

    )

}

export default Navlink