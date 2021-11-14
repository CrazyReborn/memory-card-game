import React, { useState, useEffect } from "react";
import images from './images'

function Gameboard (props) {
    const {score, setScore} = props;
    useEffect(() => {
        return images.shuffle()
    }, [score]);
    function handleClick () {
        setScore(score + 1);

    }
    return (
        <div>
            {images.list.map((image, index) => {
                return(
                    <img className='image' onClick={e => handleClick()} src={image.url} alt={'picture of ' + image.name} />
                )       
            })}
        </div>
    )
}

export default Gameboard