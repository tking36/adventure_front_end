import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Add from './components/Add'

const App: React.FC = () => {

  interface Adventure {
    health: number;
    attack:number;
    accuracy:number;
    weapons:number;
    items:number;
    villains:number
  }

interface Page {
  page:number
}

  const [page, setPage] = useState(0)
  const [adventure, setAdventure] = useState([])

  const getAdventures = () => {
    axios.get('https://adventure-back-end.herokuapp.com/api/adventure')
    .then((response) => setAdventure(response.data),
      (err) => console.error(err))
    .catch((error) => console.error(error))
    }

    const handleCreate = (newAdv:Adventure): any =>  {
      axios.post("https://adventure-back-end.herokuapp.com/api/adventure", newAdv)
      .then((res) => {
        console.log(res.data)
        setAdventure(adventure.concat(res.data)) 

      })
    }

  useEffect(() => {
    getAdventures()
    }, [])

    return (
      <div className="App">

        <Add handleCreate={handleCreate}/>
        {adventure.map((adv: Adventure, index: number) => (
          <div key={index}>
            <p>Health: {adv.health}</p>
            <p>Attack: {adv.attack}</p>
            <p>Accuracy: {adv.accuracy}</p>
            <p>Weapons: {adv.weapons}</p>
            <p>Items: {adv.items}</p>
            <p>Villains: {adv.villains}</p>
          </div>
        ))}
      </div>
    );
}

export default App;


