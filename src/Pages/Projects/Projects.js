//core react
import React, { useState } from "react"

//css
import classes from "./Projects.module.css"

//components
import Nav from "../../Containers/Nav/Nav"
import Project from "../../Containers/Project/Project"
import ToggleContainer from "../../Containers/Projects_toggle_container/Projects_toggle_container"

const Projects = props => {

    const [filters_open, set_filters_open] = useState(false)
    const [active_filters, set_active_filters] = useState([])

    const check_active_filters = type => {

        if (!active_filters.length) return "block"

        else {

            if (active_filters.find(item => item === type)) return "block"

            else return "none"

        }

    }

    return (

        <React.Fragment>

            <div className={classes.filter_button_container}>

                <div className={classes.filter_by_type} onClick={() => set_filters_open(true)}>FILTER BY PROJECT TYPE</div>

            </div>

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

                <Nav path={props.location.pathname} />

                <Project

                    visible={check_active_filters("Full-stack")}

                    rgb="58,95,205"

                    title="Schedule Manager"
                    project_type={"Fullstack Web Application"}

                    thumbnail_name={"diary-thumb-min.png"}
                    thumbnail_desc={"A view of the grid on desktop"}
                    // thumbnail_clipping={{objectPosition: "0% 96%"}}

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
                            My second React/fullstack project.<br /><br />
        A schedule manager for my sister's consultancy business, featuring a custom grid data struture. <br /><br />
        Clients can be added, deleted and updated. Appointments can be added, deleted and moved.<br /><br />
                        </span>

                    }

                    tech_used="React, Node, Express, MongoDb, Mongoose"
                />

                <Project

                    visible={check_active_filters("Full-stack")}

                    rgb="102,102,102"

                    title="Window Cleaning Planner"
                    project_type={"Native Android Application"}

                    thumbnail_name={"window-thumb-alt.png"}
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

                        <span>My first React and mobile project.<br /><br />
        A mobile app used to keep track of customers, payments and mass text if needed.<br /><br />
        3 Layered crud operation architecure with caskading deletion.<br /><br />
                        </span>

                    }

                    tech_used="React Native, Android studios, Node, Express, MongoDb, Mongoose"
                />

                <Project

                    visible={check_active_filters("Full-stack")}

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
                <Project

                    visible={check_active_filters("Full-stack")}

                    rgb="102,102,102"

                    title="Window Cleaning Planner"
                    project_type={"Native Android Application"}

                    thumbnail_name={"window-thumb-alt.png"}
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

                        <span>My first React and mobile project.<br /><br />
A mobile app used to keep track of customers, payments and mass text if needed.<br /><br />
3 Layered crud operation architecure with caskading deletion.<br /><br />
                        </span>

                    }

                    tech_used="React Native, Android studios, Node, Express, MongoDb, Mongoose"
                />
                <Project

                    visible={check_active_filters("Full-stack")}

                    rgb="102,102,102"

                    title="Window Cleaning Planner"
                    project_type={"Native Android Application"}

                    thumbnail_name={"window-thumb-alt.png"}
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

                        <span>My first React and mobile project.<br /><br />
        A mobile app used to keep track of customers, payments and mass text if needed.<br /><br />
        3 Layered crud operation architecure with caskading deletion.<br /><br />
                        </span>

                    }

                    tech_used="React Native, Android studios, Node, Express, MongoDb, Mongoose"
                />
                <Project

                    visible={check_active_filters("Full-stack")}

                    rgb="102,102,102"

                    title="Window Cleaning Planner"
                    project_type={"Native Android Application"}

                    thumbnail_name={"window-thumb-alt.png"}
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

                        <span>My first React and mobile project.<br /><br />
A mobile app used to keep track of customers, payments and mass text if needed.<br /><br />
3 Layered crud operation architecure with caskading deletion.<br /><br />
                        </span>

                    }

                    tech_used="React Native, Android studios, Node, Express, MongoDb, Mongoose"
                />


            </div>

        </React.Fragment>

    )

}

export default Projects