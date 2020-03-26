//core react
import React from "react"

//css
import classes from "./Technologies.module.css"

//components
import Nav from "../../Containers/Nav/Nav"
import SkillCard from "../../Containers/SkillCard/SkillCard"

import problem_solving from "../../Assets/Icons/problem-solving.svg"
import javascript from "../../Assets/Icons/javascript.svg"
import nodejs from "../../Assets/Icons/nodejs.svg"
import react from "../../Assets/Icons/react.svg"
import project_planning from "../../Assets/Icons/project-planning.svg"
import database from "../../Assets/Icons/database.svg"
import github from "../../Assets/Icons/github.svg"
import css from "../../Assets/Icons/css.svg"
import algorithms from "../../Assets/Icons/algorithm.svg"
import agileandscrum from "../../Assets/Icons/agileandscrum.svg"


const Home = props => {

    return (

        <div className={classes.container}>

            <Nav path={props.location.pathname} />

            <div className={classes.container}>

                <SkillCard title={"Problem Solving"} color="#eb2d3a" icon_name={problem_solving}/>
                <SkillCard title={"Algorithms"} color="#5D6D7E" icon_name={algorithms}/>
                <SkillCard title={"JavaScript"} color="#FFB229" icon_name={javascript}/>
                <SkillCard title={"React.js"} color="#5ED9FC" icon_name={react}/>
                <SkillCard title={"Node.js"} color="#6DA45E" icon_name={nodejs}/>
                <SkillCard title={"MongoDb"} color="#13AA52" icon_name={database}/>
                <SkillCard title={"CSS/Flexbox"} color="#006BC0" icon_name={css}/>
                <SkillCard title={"Git/Github"} color="#323232" icon_name={github}/>
                <SkillCard title={"Project Planning"} color="#69b8db" icon_name={project_planning}/>
                <SkillCard title={"Agile & Scrum"} color="#fb654e" icon_name={agileandscrum}/>

            </div>


        </div>

    )

}

export default Home