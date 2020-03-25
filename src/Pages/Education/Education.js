//core react
import React from "react"

//css
import classes from "./Education.module.css"

//components
import Nav from "../../Containers/Nav/Nav"

const Home = props => {

    return (

        <React.Fragment>

            <Nav path={props.location.pathname} />

            <h1 className={classes.title}>Education</h1>

            <div className={classes.container}>

                <div className={classes.university}>

                    <h3 className={classes.subject}>Computer Science - 2015-2021</h3>
    
                    <h2 className={classes.school_name}>University of Hertfordshire </h2>

                    <p className={classes.degree_description}>This flexible, online bachelor's degree has provided a strong foundation of problem solving and software engineering. </p>

                    <p className={classes.description}>Some of the best modules include : </p>

                    <p className={classes.description_point}>- Algorithms and data structures </p>
                    <p className={classes.description_point}>- Project planning </p>
                    <p className={classes.description_point}>- Internet technologies </p>
                    <p className={classes.description_point}>- Mobile computing </p>
                    <p className={classes.description_point}>- Data management and Applications </p>

                    <p className={classes.description_grade}><b>Current weighted average is 69.5% (First)</b></p>

                </div>

                <div className={classes.college}>

                    <h3 className={classes.subject}>Business Studies - A*/A*/A</h3>
                    <h2 className={classes.school_name}>Chelmsford College </h2>


                </div>

            </div>

        </React.Fragment>

    )

}

export default Home