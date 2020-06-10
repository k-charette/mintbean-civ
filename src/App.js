import React, { useState, useEffect } from 'react'
import './App.css'
import './styles/app.css'

const App = () =>{
  const [population, setPopulation] = useState(2)
  const [cities, setCities] = useState(0)
  const [gold, setGold] = useState(0)
  const [border, setBorder] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setGold(gold => gold + 1)
    }, 800)

    if (population >= 10 && gold >= 10){
      setBorder('border-green-500')
    }

    if (population < 10 || gold < 10){
      setBorder('border-red-500')
    }

    return () => clearInterval(interval)

  },[gold])

  const handlePopulation = () => {
    setPopulation(population + 1)
  }

  const handleCreateSettlement = () => {
    if (population >= 10 && gold >= 10) {
      setCities(cities + 1)
      setPopulation(population - 5)
      setGold(gold - 5)
    }
  }

  return (
    <div className='p-10 text-center'>
      <div className='m-auto'>
        <img style={{margin: 'auto', maxWidth: '20%'}} src='https://gamepedia.cursecdn.com/civ6_gamepedia_en/9/92/Icon_Gold.png?version=5a0fdb33eab59cf79da6d07bf6b869e1' alt='gold'/>
        <h2> Gold {gold} </h2>
        <img style={{ margin: 'auto', height: '35px', width: '35px'}}src='https://gamepedia.cursecdn.com/civ6_gamepedia_en/9/97/Icon_unit_settler_portrait.png?version=06f4bb40e5f040f892408785f9a79144' alt='settler' />
        <h2> Population {population} </h2>
        
      </div>
      <div>
        <button className={`m-2 p-2 border-2 border-green-500`} onClick={handlePopulation}> Increase Population </button>
      </div>
      <div>
        <img style={{ margin: 'auto', height: '40px', width: '40px'}}src='https://gamepedia.cursecdn.com/civ6_gamepedia_en/1/1f/Icon_building_library.png?version=a37f5bb6db3813332168a160b93f3f0a' alt='building'/>
      <h2> Cities {cities} </h2>
        <button className={`m-2 p-2 border-2 border-red-500 || ${border}`} onClick={handleCreateSettlement}> Create a City 
          <p className='text-xs font-bold pt-2'> Costs 10 Gold and must have a Population of 10 or more</p>
        </button>
        
      </div>
      <div className='flex flex-wrap m-auto justify-around p-5'>
        <div>
          <button className={`m-2 p-2 border-2 border-red-500`}> Research Farming </button>
        </div>
        <div>
          <button className={`m-2 p-2 border-2 border-red-500`}> Research Pottery </button>
        </div>
        <div>
          <button className={`m-2 p-2 border-2 border-red-500`}> Research Mining </button>
        </div>
      </div>
    </div>
  );
}

export default App;
