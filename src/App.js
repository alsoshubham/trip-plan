import React, { useState } from "react";
import data from './data';
import Tours from './components/tours';

const App = () => {
 
  const[tours, setTours] = useState(data)
  
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !==id);
    setTours(newTours);
  }

  return(
    <div>
      <h2>trip planner</h2>
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  )
};

export default App;
