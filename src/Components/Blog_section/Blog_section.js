import React from 'react'

import classes from './Blog_section.module.css'

export const Blog_section = props => {

    return (

        <div className={classes.container}>

            <h3>{props.header}</h3>

            <p>{props.text}</p>

        </div>

    )

}

export default Blog_section
