import React, {useState} from "react";

function Score (props) {
    const {score, streak} = props
    return (
        <div className='score' >
            SCORE: {score} 
            <br/>
            <br/>
            <br/>
            HIGHEST STREAK: {streak}
        </div>
    )
}

export default Score