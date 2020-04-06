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

                    thumbnail_name={"diary-thumb-min.png"}
                    thumbnail_desc={"A view of the grid on desktop"}

                    title={"Appointment Manager"}

                    writeup={"A full stack web application, featuring a custom grid data structure."}

                    tags={["React", "Node.js", "MongoDb", "Express"]}
                />

                <Project

                    visible={check_active_filters("Full-stack")}

                    thumbnail_name={"window-thumb-alt.png"}
                    thumbnail_desc={"A view of the grid"}

                    title={"Window Cleaning Planner"}

                    writeup={"A native android application developed for a window cleaning business."}

                    tags={["React Native", "Node.js", "MongoDb", "Express"]}
                />

                <Project

                    visible={check_active_filters("Full-stack")}

                    thumbnail_name={"profile-background.svg"}
                    thumbnail_desc={"A view of the grid"}

                    title={"Window Cleaning Planner"}

                    writeup={"A native android application developed for a window cleaning business."}

                    tags={["React Native", "Node.js", "MongoDb", "Express"]}
                />

                <Project

                    visible={check_active_filters("Front-end")}

                    thumbnail_name={"window-thumb-alt.png"}
                    thumbnail_desc={"A view of the grid"}

                    title={"Window Cleaning Planner"}

                    writeup={"A native android application developed for a window cleaning business."}

                    tags={["React Native", "Node.js", "MongoDb", "Express"]}
                />


                <Project

                    visible={check_active_filters("Back-end")}

                    thumbnail_name={"diary-laptop-grid.jpg"}
                    thumbnail_desc={"A view of the grid"}

                    title={"Window Cleaning Planner"}

                    writeup={"A native android application developed for a window cleaning business."}

                    tags={["React Native", "Node.js", "MongoDb", "Express"]}
                />

                <Project

                    visible={check_active_filters("Full-stack")}

                    thumbnail_name={"mobile.png"}
                    thumbnail_desc={"A view of the grid"}

                    title={"Window Cleaning Planner"}

                    writeup={"A native android application developed for a window cleaning business."}

                    tags={["React Native", "Node.js", "MongoDb", "Express"]}
                />

                <Project

                    visible={check_active_filters("Full-stack")}

                    thumbnail_name={"diary-screenshot.jpg"}
                    thumbnail_desc={"A view of the grid"}

                    title={"Window Cleaning Planner"}

                    writeup={"A native android application developed for a window cleaning business."}

                    tags={["React Native", "Node.js", "MongoDb", "Express"]}
                />

                <Project

                    visible={check_active_filters("Full-stack")}

                    thumbnail_name={"profile-background.svg"}
                    thumbnail_desc={"A view of the grid"}

                    title={"Window Cleaning Planner"}

                    writeup={"A native android application developed for a window cleaning business."}

                    tags={["React Native", "Node.js", "MongoDb", "Express"]}
                />

            </div>

        </React.Fragment>

    )

}

export default Projects