import React, { useState } from "react"

import classes from "./New_project.module.css"

import Tag from "../../Components/Project_tag/Project_tag"
import IconBar from "../../Components/Project_icon_bar/Project_icon_bar"


const Project = props => {

    const [detail_open, set_detail_open] = useState(false)
    let timeout

    return (

        <div className={classes.container}
        onMouseEnter={() =>{

            timeout = setTimeout(() => {
                set_detail_open(true)
            }, 300);

        }}
        onMouseLeave={() => {

            clearTimeout(timeout)
            set_detail_open(false)

        }}
        
        style={{display:props.visible}}

        >

            {detail_open ?

                <div className={classes.detail_container}>

                    <div className={classes.title}>{props.title}</div>

                    <div className={classes.description_container}>

                        <div className={classes.writeup_container}>

                            <span>{props.writeup}</span>

                        </div>

                        <div className={classes.tag_container}>

                            {props.tags.map((tag, index) => <Tag text={tag} anim_duration={`${1 + (index * 0.5)}s`}/>)}

                        </div>

                    </div>

                    <div className={classes.icon_container}>

                        <IconBar noGallery={props.noGallery}/>

                    </div>

                </div>

                :

                <img className={classes.thumbnail}
                    src={require(`../../Assets/Img/${props.thumbnail_name}`)}
                    alt={props.thumbnail_desc}
                    onClick={() => !detail_open ? set_detail_open(true) : null}
                />

            }


        </div>
    )

}

export default Project