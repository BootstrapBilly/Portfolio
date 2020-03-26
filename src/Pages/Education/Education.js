//core react
import React from "react"

//css
import classes from "./Education.module.css"

//components
import Nav from "../../Containers/Nav/Nav"

//assets
import photo from "../../Assets/Img/education.svg"

const Home = props => {

    return (

        <React.Fragment>

            <Nav path={props.location.pathname} />

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

                    <h3 className={[classes.subject, classes.subject_college].join(" ")}>Business Studies - A*/A*/A</h3>
                    <h2 className={classes.school_name}>Chelmsford College </h2>
                    
                    <div className={classes.school}>

                        <h3 className={[classes.subject, classes.subject_school].join(" ")}>10 A*-C GCSE's</h3>
                        <h2 className={classes.school_name}>Jo Richardson community school</h2>

                    </div>

                </div>



            </div>
            <div className={classes.footer_image_wrapper}><img className={classes.footer_image} src={photo} alt="An education graphic" /></div>
        </React.Fragment>

    )

}

export default Home