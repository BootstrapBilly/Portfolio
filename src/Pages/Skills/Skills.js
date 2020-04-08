import React , {useState} from "react"

import classes from "./Skills.module.css"

//components
import Nav from "../../Containers/Nav/Nav"
import SkillSection from "../../Components/Skills_section/Skills_section"

//assets
import problem_solving from "../../Assets/Icons/problem-solving.svg"
import javascript from "../../Assets/Icons/javascript.svg"
import nodejs from "../../Assets/Icons/nodejs.svg"
import react from "../../Assets/Icons/react.svg"
import project_planning from "../../Assets/Icons/project-planning.svg"
import database from "../../Assets/Icons/database.svg"
import css from "../../Assets/Icons/css.svg"
import algorithms from "../../Assets/Icons/algorithm.svg"
import agileandscrum from "../../Assets/Icons/agileandscrum.svg"
import html from "../../Assets/Icons/html.svg"
import react_native from "../../Assets/Icons/react-native.svg"
import express from "../../Assets/Icons/express.svg"
import testing from "../../Assets/Icons/testing.svg"
import github from "../../Assets/Icons/github.svg"
import usability from "../../Assets/Icons/usability.svg"
import redux from "../../Assets/Icons/redux.svg"

const Skills = props => {

    const [visible, set_visible] = useState(["front-end"])

    const handle_toggle_section = section_name => {

        if(visible.find(item => item === section_name)) set_visible(visible => [...visible.filter(item => item !== section_name)])

        else set_visible(visible => [...visible, section_name])
    }

    return (

        <div className={classes.container}>

            <Nav path={props.location.pathname} />

            <SkillSection 
            handle_toggle_section={()=> handle_toggle_section("front-end")}
            visible={visible.find(item => item === "front-end") ? true : false}
            skill_name="Front-end"
            skillcard_info={

                [
                    {title:"Html", color:"#FF525D", icon_name:html},
                    {title:"CSS/Flexbox", color:"#006BC0", icon_name:css},
                    {title:"JavaScript", color:"#ff7e47", icon_name:javascript},
                    {title:"React.js", color:"#3ABCE0", icon_name:react},
                    {title:"React Native", color:"#2488FF", icon_name:react_native},
                    {title:"Redux", color:"#7D54BE", icon_name:redux},
                ]
            }
            />

            <SkillSection 
            handle_toggle_section={()=> handle_toggle_section("back-end")}
            visible={visible.find(item => item === "back-end") ? true : false}
            skill_name="Back-end"
            skillcard_info={

                [
                    {title:"Node.js", color:"#6DA45E", icon_name:nodejs},
                    {title:"Express", color:"#5D5DC4", icon_name:express},
                    {title:"MongoDb", color:"#13AA52", icon_name:database},
                ]
            }
            />

            <SkillSection 
            handle_toggle_section={()=> handle_toggle_section("Software Engineering")}
            visible={visible.find(item => item === "Software Engineering") ? true : false}
            skill_name="Software Engineering"
            skillcard_info={

                [
                    {title:"Problem Solving", color:"#eb2d3a", icon_name:problem_solving},
                    {title:"Project Planning", color:"#4685A0", icon_name:project_planning},
                    {title:"Agile & Scrum", color:"#fb654e", icon_name:agileandscrum},
                    {title:"Automated Testing", color:"#524202", icon_name:testing},
                    {title:"Data structures", color:"#4949E7", icon_name:algorithms},
                    {title:"Usability Testing", color:"#22B2EF", icon_name:usability},
                ]
            }
            />

            <SkillSection 
            handle_toggle_section={()=> handle_toggle_section("Other")}
            visible={visible.find(item => item === "Other") ? true : false}
            skill_name="Other"
            skillcard_info={

                [
                    
                    {title:"Git/Github", color:"black", icon_name:github},
                    
                    
                    
    
                ]
            }
            />



        </div>

    )

}

export default Skills
