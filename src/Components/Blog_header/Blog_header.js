import React from 'react'

//css
import classes from './Blog_header.module.css'

//util
import colours from '../../util/colours'

//assets
import BlogPhoto from "../../Assets/Graphics/blog_photo.svg"

export const Blog_header = props => {

    return (

        <div className={classes.container}>

            <h2 className={classes.project_name} style={{ color: colours.primary }}>{props.project_name}</h2>

            <h1 className={classes.project_description}>{props.project_description}</h1>

            <div className={classes.date_container}>

                <span className={classes.date_started}>Date published</span>
                <span className={classes.date}>{props.date}</span>

            </div>

            <img src={BlogPhoto} alt="Someone giving a gift to someone in need" className={classes.blog_photo} />

        </div>

    )

}

export default Blog_header