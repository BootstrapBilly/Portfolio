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

                {props.active_section === "gallery" ?


                    <React.Fragment>

                        <SRLWrapper>

                            <img className={classes.thumbnail} src={require(`../../Assets/Img/${props.thumbnail_name}`)} alt={props.thumbnail_desc} style={props.thumbnail_clipping} />

                            {props.images.map(image => <img src={require(`../../Assets/Img/${image.name}`)} alt={image.desc} style={{ display: "none" }} />)}

                        </SRLWrapper>

                        <span className={classes.view_gallery}>VIEW GALLERY</span>

                        <div className={classes.tech_used} style={props.color}>{props.tech_used}</div>

                    </React.Fragment>

                    :

                    <div className={classes.mobile_description}>{props.mobile_description}</div>}


            </div>

        </div>

    )

}

export default Project