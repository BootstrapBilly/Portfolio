//core react
import React from "react"

//external
import { SRLWrapper } from "simple-react-lightbox";

//css
import classes from "./Project_content.module.css"

//Assets

const Project = props => {

    console.log(props.images.map(item => console.log(item.name)))

    return (

        <div className={classes.container}>

            {<div className={classes.project_type}>{props.project_type}</div>}

            <div className={classes.inner_container}>

                <SRLWrapper>

                    <img className={classes.thumbnail} src={require(`../../Assets/Img/${props.thumbnail_name}.jpg`)} alt={props.thumbnail_desc} /> 

                    {props.images.map(image => <img src={require(`../../Assets/Img/${image.name}.gif`)} alt={image.desc} style={{ display: "none" }} />)}

                </SRLWrapper>

                <span className={classes.view_gallery} style={props.color}>View gallery</span>

                {<div className={classes.mobile_description}>{props.mobile_description}</div>}

                <span className={classes.mobile_description} style={props.color}>{props.tech_used}</span>

            </div>

        </div>

    )

}

export default Project