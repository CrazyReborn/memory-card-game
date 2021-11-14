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
        <div>
            {images.list.map((image, index) => {
                return(
                    <img className='image' onClick={e => handleClick(e)} key={image.id} name={image.name} src={image.url} alt={'picture of ' + image.name} />
                )       
            })}
        </div>
    )
}

export default Gameboard