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

                rgb="4, 154, 154"

                title="Schedule Manager"
                project_type={<p>Fullstack Web Application</p>}

                thumbnail_name={"diary-screenshot"}
                thumbnail_desc={"A view of the grid"}

                images={[

                    { name: "diary-add-appointment", desc: "Adding an appointment" },
                    { name: "diary_grid_showcase", desc: "Other grid functions" },
                    { name: "diary_validation", desc: "Form validation" },
                    { name: "diary_move_appointment", desc: "Moving an appointment" }

                ]}

                handleClickGithub={() => window.open("https://github.com/BootstrapBilly/1to1", "_blank")}
                handleClickLive={() => window.open("https://to1-13f69.firebaseapp.com/", "_blank")}

                mobile_description={

                <p>A schedule manager for my sisters consultancy business, featuring a custom grid data struture. <p> Clients can be added, deleted and updated. Appointments can be added, deleted and moved.
                </p></p>

                }

                tech_used="React, Node, Express, MongoDb, Mongoose"
            />


        </div>

    )

}

export default Projects