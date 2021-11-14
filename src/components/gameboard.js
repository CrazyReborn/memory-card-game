import React, { useState, useEffect } from "react";
import images from './images'

function Gameboard () {
    const [count, setCount] = useState(0);
    useEffect(() => {
        return images.shuffle()
    }, [count])
    return (
        <div>
            <p>{count}</p>
            {images.list.map((image, index) => {
                return(
                    <img onClick={e => {setCount(count + 1); console.log(image.url)}} key={image.id} src={image.url} alt={'picture of ' + image.name} />
                )       
            })}
        </div>
    )
}

export default Gameboard