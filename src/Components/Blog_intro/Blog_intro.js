import React from 'react'

import classes from './Blog_intro.module.css'

export const Blog_intro = () => {

    return (

        <div className={classes.container}>

            <h7 className={classes.text}>Background : <span className={classes.sub_text}>Food for all takes fresh produce that would have gone to waste, then turns it into free nutritious meals for the community.</span></h7>

            <div className={classes.second_para}>

                <h7 className={classes.text}>The problem : <span className={classes.sub_text}>"We need an ordering system for hubs to submit their requests for quantities of meals and to onboard new hubs easily"</span></h7>

            </div>

        </div>

    )

}

export default Blog_intro