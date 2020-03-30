//core react
import React, {useState} from "react"

//css
import classes from "./AboutMe.module.css"

//components
import Nav from "../../Containers/Nav/Nav"
import TopSection from "../../Components/Profile_top_section/Top_section"
import ProfileTabs from "../../Containers/Profile_tabs/Profile_tabs"
import BottomSection from "../../Containers/Profile_bottom_section/Bottom_section"

const AboutMe = props => {

    const [selected, setSelected] = useState(0)

    return (

        <React.Fragment>

            <div className={classes.container}>

                <TopSection/>

                <ProfileTabs onClick={(tab)=> setSelected(tab)} selected={selected}/>

                <BottomSection selected={selected}/>
                
            </div>

            <Nav path={props.location.pathname} />

        </React.Fragment>
    )

}

export default AboutMe