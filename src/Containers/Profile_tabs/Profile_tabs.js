//core react
import React from "react"

//css
import classes from "./Profile_tabs.module.css"

//components

const Profile_tabs = props => {

    return (

        <div className={classes.tab_container}>

            <div className={[classes.tab, props.selected === 0 ? classes.active_tab : null].join(" ")} onClick={props.onClick.bind(this,0)}>Profile</div>
            <div className={[classes.tab, props.selected === 1 ? classes.active_tab : null].join(" ")} onClick={props.onClick.bind(this,1)}>Contact</div>

        </div>
    )

}

export default Profile_tabs