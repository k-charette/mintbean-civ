import React, { useState, useEffect } from 'react'
import './App.css'
import './styles/app.css'
import Header from './Header'

const App = () =>{
  const [population, setPopulation] = useState(2)
  const [cities, setCities] = useState(0)
  const [gold, setGold] = useState(0)
  const [border, setBorder] = useState('')
  const [farmBorder, setFarmBorder] = useState('')
  const [farm, setFarm] = useState(0)
  const [mineBorder, setMineBorder] = useState('')
  const [mine, setMine] = useState(0)
  const [buttonDisable, setButtonDisable] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setGold(gold => gold + 1)

      if (farm) {
        setGold(gold => gold + 2)
      }
      if (mine){
        setGold(gold => gold + 3)
      }
    }, 500)

    if (population >= 10 && gold >= 20){
      setBorder('border-green-500')
    } else if (population < 10 || gold < 10){
      setBorder('border-red-500')
    } else {
      setBorder('border-red-500')
    }

    // increase gold and city amount
    if (gold >= 15 && population >= 30 && cities >= 1){
      setFarmBorder('border-green-500')
    } else {
      setFarmBorder('border-red-500')
    }

    // increase gold and city amount
    if (gold >= 30 && cities >= 2){
      setMineBorder('border-green-500')
    } else {
      setMineBorder('border-red-500')
    }

    if (gold < 0){
      setButtonDisable(true)
      setMessage(`You don't have enough gold!`)
    } else if (gold > 0) {
      setButtonDisable(false)
      setMessage(``)
    }

    return () => clearInterval(interval)

  },[gold, farm])

  const handlePopulation = () => {
    setPopulation(population + 1)
  }

  const handleCreateCity = () => {
    if (population >= 10 && gold >= 10) {
      setCities(cities + 1)
      setPopulation(population - 5)
      setGold(gold - 20)
    }
  }

  const handleCreateFarm = () => {
    setFarm(farm => farm + 1)
    setGold(gold - 15)

    setInterval(() => {
      setGold(gold => gold + 2)
    }, 4000)
  }


  const handleCreateMine = () => {
    setMine(mine => mine + 1)
    setGold(gold - 30)

    setInterval(() => {
      setGold(gold => gold + 3)
    }, 2000)

  }


  return (
    <div>
      <Header />
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
        <button className={`m-2 p-2 border-2 border-red-500 || ${border}`} onClick={handleCreateCity}> Create a City 
          <p className='text-xs font-bold pt-2'> Costs 20 Gold and must have a Population of 10 or more</p>
        </button>
        
      </div>
      <div className='flex flex-wrap m-auto justify-around p-5'>
        <div>
        <img style={{ margin: 'auto', height: '40px', width: '40px'}}src='https://gamepedia.cursecdn.com/civ6_gamepedia_en/9/92/Icon_building_granary.png?version=46862d8d4dc00a68524d3251b1dee735' alt='farm'/>
        <h2> Farms {farm} </h2>
          <button className={`m-2 p-2 border-2 border-red-500 || ${farmBorder}`} onClick={handleCreateFarm} disabled={buttonDisable}> Build Farm 
          <p className='text-xs font-bold pt-2'> Costs 15 Gold and must have a Population of 30 or more</p>
          <p className='text-xs font-bold pt-2 text-red-500'>{message}</p>
          </button>
        </div>
        <div>
        <img style={{ margin: 'auto', height: '40px', width: '40px'}}src='https://vignette.wikia.nocookie.net/civilization/images/4/48/Mine_%28Civ6%29.png/revision/latest/top-crop/width/720/height/900?cb=20190812195142' alt='farm'/>
          <h2> Mines {mine} </h2>
          <button className={`m-2 p-2 border-2 border-red-500`} onClick={handleCreateMine} disabled={buttonDisable}> Build Mine 
          <p className='text-xs font-bold pt-2'> Costs 30 Gold and Requires 2 Cities</p>
          <p className='text-xs font-bold pt-2 text-red-500'>{message}</p>
          </button>        
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
