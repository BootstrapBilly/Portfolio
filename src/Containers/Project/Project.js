//core react
import React from "react"

//css
import classes from "./Project.module.css"

//components
import Content from "../../Containers/Project_content/Project_content"
import IconBar from "../../Components/Project_icon_bar/Project_icon_bar"

const Project = props => {


    return (

        <div className={classes.container} style={{boxShadow: `1px 1px 1px 1px rgba(${props.rgb}, 0.507)`}}>

            <div className={classes.title} style={{color: `rgb(${props.rgb})`}}>{props.title}</div>

            <Content mobile_description={props.mobile_description} project_type={props.project_type} color={{color:`rgb(${props.rgb})`}} images={props.images} thumbnail_desc={props.thumbnail_desc} thumbnail_name={props.thumbnail_name} tech_used={props.tech_used}/>

            <IconBar handleClickGithub={props.handleClickGithub} handleClickLive={props.handleClickLive}/>

        </div>

    )

}

export default Project