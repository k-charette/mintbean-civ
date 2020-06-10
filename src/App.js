import React, { useState } from 'react'
import './App.css'
import './styles/app.css'

const App = () =>{
  const [population, setPopulation] = useState(0)
  const [settlement, setSettlement] = useState(0)

  const handleClick = () => {
    setPopulation(population + 1)
  }

  const handleCreateSettlement = () => {
    if (population >= 10) {
      setSettlement(settlement + 1)
      setPopulation(population - 5)
    } 
  }



  return (
    <div className='p-10 text-center'>
      <div>
        <h2> Population {population} </h2>
        <h2> Settlements {settlement} </h2>
      </div>
      <div>
        <button className='m-2 p-3 border border-gray-600'onClick={handleClick}> Increase Population </button>
      </div>
      <div>
        <button className='m-2 p-3 border border-gray-600' onClick={handleCreateSettlement}> Create a Settlement (Requires a population higher than 10) </button>
      </div>
    </div>
  );
}

export default App;
