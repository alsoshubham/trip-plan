import Card from "./card"
function Tours({tours, removeTour}){
return(
 <div className="container">
    <div>
        <h2 className="title">Plan your trip</h2>
    </div>
    <div className="cards">
        {
            tours.map( (tour)=>{
                return <Card {...tour} removeTour={removeTour}/>
            })
        }
    </div>
 </div>
    );
}

export default Tours;