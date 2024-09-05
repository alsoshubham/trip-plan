function Tours({tours}){
 <div>
    <div>
        <h2>Plan your trip</h2>
    </div>
    <div>
        {
            Tours.map((tour)=>{
                return <card></card>
            })
        }
    </div>
 </div>
}

export default Tours;