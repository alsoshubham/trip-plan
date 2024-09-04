import React, { useState } from "react";
import data from './data';
import Tours from "./components/Tours";

const App = () => {

  const[tours, setTours] = useState(data)
  return(
    <div>
      <h2>trip planner</h2>
      <Tours tours={tours}></Tours>
    </div>
  )
};

export default App;
