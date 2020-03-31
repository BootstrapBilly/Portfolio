//core react
import React from "react"

//css
import classes from "./Projects.module.css"

//components
import Nav from "../../Containers/Nav/Nav"
import Project from "../../Containers/Project/Project"

const Projects = props => {

    return (

        <div className={classes.container}>

            <Nav path={props.location.pathname} />

            <Project

                rgb="197, 150, 255"

                title="Schedule Manager"
                project_type={"Fullstack Web Application"}

                thumbnail_name={"diary-thumb.jpg"}
                thumbnail_desc={"A view of the grid on desktop"}
                thumbnail_clipping={{objectPosition: "0% 96%"}}

                images={[

                    { name: "diary-screenshot.jpg", desc: "A view of the grid on mobile" },
                    { name: "diary-add-appointment.gif", desc: "Adding an appointment on mobile" },
                    { name: "diary_grid_showcase.gif", desc: "Other grid functions on mobile" },
                    { name: "diary_validation.gif", desc: "Form validation" },
                    { name: "diary_move_appointment.gif", desc: "Moving an appointment" }

                ]}

                handleClickGithub={() => window.open("https://github.com/BootstrapBilly/1to1", "_blank")}
                handleClickLive={() => window.open("https://to1-13f69.firebaseapp.com/", "_blank")}

                mobile_description={

                <span>
                My second React/fullstack project.<br/><br/>
                A schedule manager for my sister's consultancy business, featuring a custom grid data struture. <br/><br/>
                Clients can be added, deleted and updated. Appointments can be added, deleted and moved.<br/><br/>
               </span>

                }

                tech_used="React, Node, Express, MongoDb, Mongoose"
            />

            <Project

                rgb="242,71,106"

                title="Window Cleaning Planner"
                project_type={"Native Android Application"}

                thumbnail_name={"diary-screenshot.jpg"}
                thumbnail_desc={"A view of the grid"}

                images={[

                    { name: "diary-add-appointment.gif", desc: "Adding an appointment" },
                    { name: "diary_grid_showcase.gif", desc: "Other grid functions" },
                    { name: "diary_validation.gif", desc: "Form validation" },
                    { name: "diary_move_appointment.gif", desc: "Moving an appointment" }

                ]}

                handleClickGithub={() => window.open("https://github.com/BootstrapBilly/1to1", "_blank")}
                handleClickLive={() => window.open("https://to1-13f69.firebaseapp.com/", "_blank")}

                mobile_description={
                
                <p>My first React and mobile project.
                <p>A mobile app used to keep track of customers, payments and mass text if needed.
                <p>3 Layered crud operation architecure with caskading deletion.
                </p></p></p>

                }

                tech_used="React Native, Android studios, Node, Express, MongoDb, Mongoose"
            />

            <Project

                rgb="66, 224, 63"

                title="Window Cleaning Planner"
                project_type={"Native Android Application"}

                thumbnail_name={"diary-screenshot.jpg"}
                thumbnail_desc={"A view of the grid"}

                images={[

                    { name: "diary-add-appointment.gif", desc: "Adding an appointment" },
                    { name: "diary_grid_showcase.gif", desc: "Other grid functions" },
                    { name: "diary_validation.gif", desc: "Form validation" },
                    { name: "diary_move_appointment.gif", desc: "Moving an appointment" }

                ]}

                handleClickGithub={() => window.open("https://github.com/BootstrapBilly/1to1", "_blank")}
                handleClickLive={() => window.open("https://to1-13f69.firebaseapp.com/", "_blank")}

                mobile_description={
                <span>Yes</span>

                }

                tech_used="React Native, Android studios, Node, Express, MongoDb, Mongoose"
            />


        </div>

    )

}

export default Projects