import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Bottle from './Bottle'

function App() {

  const [bottles, setBottles] = useState([])

  useEffect(() => {
    fetch('../public/botlles.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  }, [])

  return (
    <>
    <h1>Memorable Bottle</h1>
    <div className='bottles-container'>
      {
        bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} ></Bottle> )
      }
    </div>
    </>
  )
}

export default App
