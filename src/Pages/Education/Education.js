//core react
import React from "react"

//css
import classes from "./Education.module.css"

//components
import Nav from "../../Containers/Nav/Nav"

const Home = props => {

    return (

        <React.Fragment>

            <div className={classes.container}>

                <h1 className={classes.title}>Education</h1>

                <div className={classes.university}>

                    <h3 className={classes.header}>Computer Science</h3>
                    <h2 className={classes.sub_header}>University of Hertfordshire </h2>

                    <p className={classes.description}>This flexible, online bachelor's degree has provided a strong foundation of problem solving and software engineering. </p>
                    
                    <p className={classes.description}>Some of the best modules include : </p>

                    <p className={classes.description}>- Algorithms and data structures </p>
                    <p className={classes.description}>- Project planning </p>
                    <p className={classes.description}>- Internet technologies </p>
                    <p className={classes.description}>- Mobile computing </p>
                    <p className={classes.description}>- Data management and Applications </p>

                    <p className={classes.description}><b>With an expected first class honours, graduation is planned for 2021.</b></p>
                    <p className={classes.description}>- Current weighted average is 69.5%</p>

                </div>

                <div className={classes.college}>

                    <h3 className={classes.header}>Business Studies</h3>
                    <h2 className={classes.sub_header}>Chelmsford College </h2>


                </div>

            </div>

            <Nav path={props.location.pathname} />

        </React.Fragment>

    )

}

export default Home