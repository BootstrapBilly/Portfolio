//core react
import React, { useState } from "react"

//external
import { SRLWrapper } from "simple-react-lightbox";
import { useLightbox } from 'simple-react-lightbox'

//css
import classes from "./Project_content.module.css"

//Assets

const Project = props => {

    const openLightbox = useLightbox()

    const [hovered_thumbnail, set_hovered_thumbnail] = useState(null)

    return (

        <div className={classes.container}>

            {<div className={classes.project_type}>{props.project_type}</div>}

            <div className={classes.inner_container}>

                {props.active_section === "gallery" ?

                    <React.Fragment>

                        <SRLWrapper>

                            <div className={classes.thumbnail_container}
                                onMouseEnter={() => !hovered_thumbnail ? set_hovered_thumbnail(props.thumbnail_name) : null}
                                onMouseLeave={() => set_hovered_thumbnail(null)} >

                                <img className={classes.thumbnail}
                                    src={require(`../../Assets/Img/${props.thumbnail_name}`)}
                                    alt={props.thumbnail_desc}
                                    style={props.thumbnail_clipping}
                                />

                                {hovered_thumbnail ? <div className={classes.thumbnail_hovered} onClick={() => openLightbox(props.thumbnail_name)}><span className={classes.take_a_look}>Take a look</span></div> : null}

                            </div>

                            {props.images.map(image => <img src={require(`../../Assets/Img/${image.name}`)} alt={image.desc} style={{ display: "none" }} />)}

                        </SRLWrapper>

                        <div className={classes.tech_used} style={{ color: `rgb(${props.color})` }}>{props.tech_used}</div>

                    </React.Fragment>

                    :

                    <div className={classes.mobile_description}>{props.mobile_description}</div>}


            </div>

        </div>

    )

}

export default Project