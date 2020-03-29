//core react
import React, {useState} from "react"

//css
import classes from "./Project.module.css"

//components
import Content from "../../Containers/Project_content/Project_content"
import IconBar from "../../Components/Project_icon_bar/Project_icon_bar"

const Project = props => {

    const [selected_tab, set_selected_tab] = useState(0)

    return (

        <div className={classes.container}>

            <div className={classes.title}>{props.title}</div>

            <Content selected_tab={selected_tab} image_source={props.image_source} notes={props.notes}/>

            <IconBar handleClickIcon={(tab)=> set_selected_tab(tab)} handleClickGithub={props.handleClickGithub}/>

        </div>

    )

}

export default Project