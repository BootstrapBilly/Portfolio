//core react
import React, {useState} from "react"

//css
import classes from "./Project.module.css"

//components
import Content from "../../Containers/Project_content/Project_content"
import IconBar from "../../Components/Project_icon_bar/Project_icon_bar"

const Project = props => {

    const [active_section, set_active_section] = useState("gallery")

    return (

        <div className={classes.container}>

            <div className={classes.title} style={{color: `rgb(${props.rgb})`}}>{props.title}</div>

            <Content mobile_description={props.mobile_description} project_type={props.project_type} color={props.rgb} images={props.images} thumbnail_desc={props.thumbnail_desc} thumbnail_name={props.thumbnail_name} tech_used={props.tech_used} active_section={active_section} thumbnail_clipping={props.thumbnail_clipping}/>

            <IconBar handleClickGithub={props.handleClickGithub} handleClickLive={props.handleClickLive} active_section={active_section} change_active_section={section => set_active_section(section)}/>

        </div>

    )

}

export default Project