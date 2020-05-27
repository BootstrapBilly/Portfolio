//core react
import React, { useState } from "react"

//css
import classes from "./Projects.module.css"

//components
import Nav from "../../Containers/Nav/Nav"
import Project from "../../Containers/New_project/New_project"
import ToggleContainer from "../../Containers/Projects_toggle_container/Projects_toggle_container"

const Projects = props => {

    const [filters_open, set_filters_open] = useState(false)
    const [active_filters, set_active_filters] = useState([])

    const check_active_filters = type => {

        if (!active_filters.length) return "flex"

        else {

            if (active_filters.find(item => item === type)) return "flex"

            else return "none"

        }

    }

    return (

        <React.Fragment>

            <ToggleContainer

                filters_open={filters_open}

                handle_apply_press={(options) => {
                    set_active_filters(options)
                    set_filters_open(false)
                }
                }

                handle_close_button={() => set_filters_open(false)}

            />

            <div className={classes.container}>

                <div className={classes.filter_button_container}>

                    <div className={classes.filter_by_type} onClick={() => set_filters_open(true)}>FILTER BY PROJECT TYPE</div>

                </div>

                <Nav path={props.location.pathname} />

                <Project

                    visible={check_active_filters("Full-stack")}

                    thumbnail_name={"collection_tracker.jpg"}
                    thumbnail_desc={"A screenshot of the collection tracker on various devices"}

                    title={"Collection Tracker"}

                    writeup={"A full stack web app which tracks my Guinness world record collection."}

                    completion_date={"May 2020"}

                    website={"https://collectiontracker-57b9e.web.app/"}

                    github={"https://github.com/BootstrapBilly/Collection_tracker_2020"}

                    tags={["React", "Node.js", "MongoDb", "Responsive Design",]}
                />

                <Project

                    visible={check_active_filters("Full-stack")}

                    thumbnail_name={"diary-thumb-min.png"}
                    thumbnail_desc={"A view of the grid on desktop"}

                    title={"Appointment Manager"}

                    writeup={"A full stack web application, featuring a custom grid data structure."}

                    completion_date={"March 2020"}

                    website={"https://to1-13f69.firebaseapp.com/"}

                    github={"https://github.com/BootstrapBilly/1to1"}

                    tags={["React", "Node.js", "MongoDb", "Responsive Design"]}

                />

                <Project

                    visible={check_active_filters("Full-stack")}

                    thumbnail_name={"window-thumb-alt.png"}
                    thumbnail_desc={"A view of the grid"}

                    title={"Window Cleaning Planner"}

                    writeup={"A native android application developed for a window cleaning business."}

                    completion_date={"December 2019"}

                    website={"https://play.google.com/store/apps/details?id=com.billyjames.easywindows&gl=GB"}

                    github={"https://github.com/BootstrapBilly/14188056-Assignment2-6WCM0034-Window-Cleaning-App"}

                    tags={["React Native", "Node.js", "MongoDb", "Express"]}
                />

                <Project

                    visible={check_active_filters("Front-end")}

                    thumbnail_name={"recall-thumb.png"}
                    thumbnail_desc={"A screenshot of the landing page"}

                    title={"Landing page"}

                    writeup={"A landing page utilising colour psychology and a video background."}

                    tags={["React", "Redux", "CSS"]}

                />

                <Project

                    visible={check_active_filters("Full-stack")}

                    thumbnail_name={"mac.jpg"}
                    thumbnail_desc={"A view of the grid"}

                    title={"Window Cleaning Planner"}

                    writeup={"A native android application developed for a window cleaning business."}

                    tags={["React Native", "Node.js", "MongoDb", "Express"]}
                />

                <Project

                    visible={check_active_filters("Full-stack")}

                    thumbnail_name={"diary-laptop-grid.jpg"}
                    thumbnail_desc={"A view of the grid"}

                    title={"Window Cleaning Planner"}

                    writeup={"A native android application developed for a window cleaning business."}

                    tags={["React Native", "Node.js", "MongoDb", "Express"]}
                />


                <Project

                    visible={check_active_filters("Data structures and algorithms")}

                    thumbnail_name={"Linkedlist.png"}
                    thumbnail_desc={"A linked list"}

                    title={"Linked List Data Structure"}

                    writeup={"A complex linked list with various layers and algorithms, developed for a university project."}

                    tags={["Java", "Algorithms", "BlueJ", "Linked List"]}

                    noGallery
                />


                <Project

                    visible={check_active_filters("Project Planning")}

                    thumbnail_name={"proposal.jpg"}
                    thumbnail_desc={"A man signing paper"}

                    title={"Project Proposal"}

                    writeup={"Includes requirements, objectives, risk analysis, legal issues and a Gantt chart."}

                    tags={["Planning", "Gantt chart", "Report writing"]}
                />

            </div>

        </React.Fragment>

    )

}

export default Projects