import React from 'react';
import useStyles from '../styles'



const Bubble = ({username,time,orientation,children}) => {
    const classes = useStyles()
    return (
        <div className={classes.bubbleWrapper}>
            <div className={`${classes.bubble} ${classes['bubble'+orientation]} `}>
            <div>{children}</div>
            <div className={classes['bubbleDetails'+orientation]} >
                <p>{username} : {time}</p>
            </div>
            </div>
            
        </div>
    )
}

export default Bubble;