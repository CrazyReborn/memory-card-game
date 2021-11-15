import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import images from './images'

function Gameboard (props) {
    const {score, setScore, streak, setStreak} = props;
    const [memorized, setMemorized] = useState([]);

    useEffect(() => {
        if (streak < score) {
            setStreak(score);
        }
        return images.shuffle()
    }, [score, streak]);

    function handleClick (e) {
        if (!memorized.includes(e.target.name)) {
            setMemorized(memorized.concat(e.target.name));
            setScore(score + 1);
        }
        else {
            setScore(0);
            setMemorized([]);
        }
    }
    return (
        <div className='gameboard'>
            {images.list.map((image, index) => {
                return(
                    <div className='cell' key={image.id}>
                    <img className='image' onClick={e => handleClick(e)} name={image.name} 
                    src={image.url} alt={'picture of ' + image.name} />
                    </div>
                )       
            })}
        </div>
    )
}

export default Gameboard