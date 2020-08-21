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

                <Section header={"Finding out how it works"} text="After liasing with one of the charity staff members about their requirements, the following was uncovered:">

                    <li className={classes.list_item}>There are multiple central kitchens which prepare the meals</li>
                    <li className={classes.list_item}>This meals get delivered to many hubs scattered around the city</li>
                    <li className={classes.list_item}>The hubs then distribute the meals to whoever needs them </li>


                </Section>


                <Section white_bg header={"Preliminary set of user stories"} text="The following user stories were produced as a result of the the initial consultation">

                    <h4>Hub</h4>

                    <li className={classes.list_item}>As a hub, I can sign up to an account to be verified by the admin, so that I can order meals  </li>
                    <li className={classes.list_item}>As a hub, I can specify whether I can collect or require delivery when signing up, so the kitchen is aware</li>
                    <li className={classes.list_item}>As a hub, I can order a certain amount of meals, so that I can feed people in need </li>
                    <li className={classes.list_item}>As a hub, I can see my likelihood of being served immediately, so that I can inform those in need </li>

                    <h4>Admin</h4>

                    <li className={classes.list_item}>As an admin, I have rights to review signups and confirm or deny them, so that I can control who has access to the system Kitchen </li>

                    <h4>Kitchen</h4>

                    <li className={classes.list_item}>As a kitchen member, I can sign up for an account to be verified by the admin, so that I can monitor the demand for meals </li>
                    <li className={classes.list_item}>As a kitchen member, I can view each hub and how many meals they require, so that I can prepare accordingly </li>
                    <li className={classes.list_item}>As a kitchen member, I can see if each hub can collect, or requires delivery so that I can prepare accordingly </li>

                </Section>

                <Section header={"Designing the authentication system"} text="Multiple requirements include the ability to signup, therefore that has been priorised to #1 on the backlog" />



          


            </div>

            <Nav path="/blog" />
        </div>

    )

}

export default Blog