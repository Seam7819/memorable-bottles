import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Bottle from './Bottle'

function App() {

  const [bottles, setBottles] = useState([])
  const [addBottle,setAddBottle] = useState([])

  const handleAddBottle = (bottle) => {
    // console.log('Bottle clicked');
    // console.log(bottle);
    const newBottleAdded = [...addBottle, bottle]
    setAddBottle(newBottleAdded);
  }

  useEffect(() => {
    fetch('../public/botlles.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  }, [])

  return (
    <>
    
    <h1>Memorable Bottle</h1>
    <h2>Bottle Added : {addBottle.length}</h2>
    <div>
      {
        addBottle.map(adbtl => <li key={adbtl.id} adbtl={adbtl}>{adbtl.name} <span key={adbtl.id} adbtl={adbtl}>,Price:${adbtl.price}</span> </li>)
      }
    </div>
    <div className='bottles-container'>
      {
        bottles.map(bottle => <Bottle handleAddBottle={handleAddBottle} key={bottle.id} bottle={bottle} ></Bottle> )
      }
    </div>
    </>
  )
}

export default App
