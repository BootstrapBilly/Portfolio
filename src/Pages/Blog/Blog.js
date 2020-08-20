import React from 'react'

import classes from './Blog.module.css'

//comnponents
import Nav from "../../Containers/Nav/Nav"
import Header from "../../Components/Blog_header/Blog_header"
import Intro from "../../Components/Blog_intro/Blog_intro"
import Section from "../../Components/Blog_section/Blog_section"

export const Blog = () => {

    return (

        <div className={classes.wrapper}>

            <div className={classes.content_container}>

                <Header project_name={"Food for all"} project_description={"Designing a food ordering system for a charity which distributes meals to those in need"} date={"20 Aug 2020"} />

                <Intro />

                <Section header={"Finding out how it works"} text="After liasing with one of the charity staff members about their requirements, the following was uncovered:"/>

                    <li className={classes.list_item}>There are multiple central kitchens which prepare the meals</li>
                    <li className={classes.list_item}>This meals get delivered to many hubs scattered around the city</li>
                    <li className={classes.list_item}>The hubs then distribute the meals to whoever needs them </li>

            </div>

            <Nav path="/blog" />
        </div>

    )

}

export default Blog