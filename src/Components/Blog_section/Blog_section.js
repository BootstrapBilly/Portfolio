import React from 'react'

import classes from './Blog_section.module.css'

export const Blog_section = props => {

    return (

        <div className={classes.container} style={{backgroundColor: props.white_bg && "whitesmoke"}}>

            <h3>{props.header}</h3>

            <p>{props.text}</p>

            {props.children}

        </div>

    )

}

export default Blog_section
