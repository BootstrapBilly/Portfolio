import React from "react"

import classes from "./Education_timeline.module.css"

const EducationTimeline = props => {

    const handle_hidden_years = given_year => {

        const hidden_years = [2007, 2008, 2009, 2010, 2013, 2016, 2017, 2018, 2019, 2020]

        if (hidden_years.find(year => year === given_year)) return "hidden"
        else return "visible"
    }

    return (

        <div className={classes.container}>

            <div className={classes.year_container}>

                {[2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021].map(year => {

                    return <span className={classes.year} style={{ visibility: handle_hidden_years(year) }}>{year}</span>

                })}

            </div>

            <div className={classes.landscape_year_container_left}>

                {[2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014].map(year => {

                    return <span className={classes.year} style={{ visibility: handle_hidden_years(year) }}>{year}</span>

                })}

            </div>

            <div className={classes.landscape_inner_container_left}>

                <div className={[classes.school_container, classes.education_block].join(" ")}>

                    <div className={classes.education_header_container}>

                        <div>10 A*-C Grade GCSE's</div>
                        <div className={classes.school_name}>Jo Richardson</div>

                        <div className={classes.gcse_body_container}>

                            <div className={classes.gcse_column}>

                                <span className={classes.gcse}>Business</span>
                                <span className={classes.gcse}>ICT</span>
                                <span className={classes.gcse}>Maths</span>
                                <span className={classes.gcse}>History</span>
                                <span className={classes.gcse}>Science</span>

                            </div>

                            <div className={classes.gcse_column}>

                                <span className={classes.gcse}>English Lang</span>
                                <span className={classes.gcse}>English Lit</span>
                                <span className={classes.gcse}>Citizenship</span>
                                <span className={classes.gcse}>Geography</span>
                                <span className={classes.gcse}>RE</span>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={[classes.college_container, classes.education_block].join(" ")}>

                    <div className={classes.education_header_container}>

                        <div>Business Studies A*/A*/A</div>
                        <div className={classes.school_name}>Chelmsford College</div>

                    </div>

                </div>


            </div>



            <div className={classes.landscape_year_container_right}>

                {[2015, 2016, 2017, 2018, 2019, 2020, 2021].map(year => {

                    return <span className={classes.year} style={{ visibility: handle_hidden_years(year) }}>{year}</span>

                })}

            </div>

            <div className={classes.landscape_inner_container_right}>

                <div className={[classes.uni_container, classes.education_block].join(" ")}>

                    <div className={classes.education_header_container}>

                        <div>Computer Science</div>
                        <div className={classes.school_name}>University of Hertfordshire</div>

                        <div className={classes.uni_body_container}>

                            <span className={classes.module}>Algorithms & Data structures</span>
                            <span className={classes.module}>Project Planning</span>
                            <span className={classes.module}>User Experience Design</span>
                            <span className={classes.module}>Mobile Computing</span>
                            <span className={classes.module}>Data Management <br/> & Applications</span>

                        </div>

                        <span className={classes.uni_grade}>Currently on track to achieve a first</span>

                    </div>

                </div>

            </div>

            <div className={classes.inner_container}>

                <div className={[classes.school_container, classes.education_block].join(" ")}>

                    <div className={classes.education_header_container}>

                        <div>10 A*-C Grade GCSE's</div>
                        <div className={classes.school_name}>Jo Richardson</div>

                        <div className={classes.gcse_body_container}>

                            <div className={classes.gcse_column}>

                                <span className={classes.gcse}>Business - A*</span>
                                <span className={classes.gcse}>ICT - A</span>
                                <span className={classes.gcse}>Maths - B</span>
                                <span className={classes.gcse}>History - B</span>
                                <span className={classes.gcse}>Science - B</span>

                            </div>

                            <div className={classes.gcse_column}>

                                <span className={classes.gcse}>English Lang - C</span>
                                <span className={classes.gcse}>English Lit - C</span>
                                <span className={classes.gcse}>Citizenship - C</span>
                                <span className={classes.gcse}>Geography - C</span>
                                <span className={classes.gcse}>RE - C</span>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={[classes.college_container, classes.education_block].join(" ")}>

                    <div className={classes.education_header_container}>

                        <div>Business Studies A*/A*/A</div>
                        <div className={classes.school_name}>Chelmsford College</div>

                    </div>

                </div>

                <div className={[classes.uni_container, classes.education_block].join(" ")}>

                    <div className={classes.education_header_container}>

                        <div>Computer Science</div>
                        <div className={classes.school_name}>University of Hertfordshire</div>

                        <div className={classes.uni_body_container}>

                            <span className={classes.module}>Algorithms and Data structures</span>
                            <span className={classes.module}>Project Planning</span>
                            <span className={classes.module}>User Experience Design</span>
                            <span className={classes.module}>Mobile Computing</span>
                            <span className={classes.module}>Data Management & Applications</span>

                        </div>

                        <span className={classes.uni_grade}>Currently on track to achieve a first</span>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default EducationTimeline