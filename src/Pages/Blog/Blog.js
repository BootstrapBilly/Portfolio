import React from 'react'

import classes from './Blog.module.css'

//comnponents
import Nav from "../../Containers/Nav/Nav"

export const Blog = () => {

    return (

        <div className={classes.container}>

            

            <Nav path="/blog"/>
        </div>

    )

}

export default Blog