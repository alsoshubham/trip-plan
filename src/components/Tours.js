import Card from "./card"
function Tours({tours, removeTour}){
return(
 <div>
    <div>
        <h2>Plan your trip</h2>
    </div>
    <div>
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