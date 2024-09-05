import { useState } from "react";

function Card({id, name, info, image, price, removeTour}){
    const[readmore, setReadmore] = useState(false);
    const description = `${info.substring(0,200)}...`

function readmoreHandler(){
    setReadmore(!readmore);
}

    return(
       <div className="card">
        {/* <img className="image">src{image} alt</img> */}
        <img className="image" src={image} alt="logo"/>
        <div className="tour-detail">
            <h4 className="tour-price">
                {price}
            </h4>
            <h4 className="tour-name">
                {name}
            </h4>
        </div>
        <div className="description">
            {description}
            <span className="read-more" onClick={readmoreHandler}>
                {readmore ? `show less`: `read more`}
            </span>
        </div>
        <button className="button-red" onClick={() => removeTour(id)}>Not Interested</button>
       </div>
    );
}

export default Card;