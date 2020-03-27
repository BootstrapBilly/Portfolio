//core react
import React from "react"

//css
import classes from "./Top_section.module.css"

//assets
import photo from "../../Assets/Img/me.png"

const Top_section = props => {

    return (

        <React.Fragment>

            <div className={classes.container}>

                <div className={classes.overlay}></div>

                <div className={classes.photo_container}>

                    <img src={photo} alt="A portrait of me" className={classes.photo} />
                </div>

                <div className={classes.caption}>

                    <span className={classes.caption_text}>Billy Catchpole</span>

                </div>

            </div>

        </React.Fragment>
    )

}

export default Top_section