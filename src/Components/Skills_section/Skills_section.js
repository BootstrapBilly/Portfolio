import React from "react"

import classes from "./Skills_section.module.css"

//components
import SkillCard from "../../Containers/SkillCard/SkillCard"

const SkillsSection = props => {

    return (

        <div className={classes.container} style={{ backgroundColor: props.bg_color ? null : null }}>

            <div className={classes.header_container}>

                {<span className={classes.header} onClick={props.handle_toggle_section}>{props.skill_name}</span>}

            </div>

            {!props.visible ? null :

                <div className={classes.skill_card_container}>

                    {props.skillcard_info.map(item => {

                        return <SkillCard title={item.title} color={item.color} icon_name={item.icon_name}/>

                    })}

                </div>

            }

        </div>

    )

}

export default SkillsSection