import React from 'react'

import classes from './Blog.module.css'

//comnponents
import Nav from "../../Containers/Nav/Nav"
import Header from "../../Components/Blog_header/Blog_header"
import Intro from "../../Components/Blog_intro/Blog_intro"

export const Blog = () => {

    return (

        <div className={classes.wrapper}>

            <div className={classes.content_container}>

                <Header project_name={"Food for all"} project_description={"Designing a food ordering system for a charity which distributes food to those in need"} date={"20 Aug 2020"} />

                <Intro />

            </div>

            <Nav path="/blog" />
        </div>

    )

}

export default Blog