import React, {useState} from "react";

function Score (props) {
    const {score} = props
    return (
        <div className='score' >
            score: {score}
        </div>
    )
}

export default Score