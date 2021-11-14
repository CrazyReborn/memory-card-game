import React, {useState} from "react";

function Score (props) {
    const {score, streak} = props
    return (
        <div className='score' >
            score: {score}
            streak: {streak}
        </div>
    )
}

export default Score