function card({id, name, info, image, price}){
    return(
       <div className="card">
        <img className="image">src{} alt</img>
        <div className="tour-detail">
            <h4>
                {price}
            </h4>
        </div>
       </div>
    );
}

export default card;