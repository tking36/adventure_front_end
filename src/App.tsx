import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'
import Middle from './components/Middle'
import Left from './components/Left'
import Bottom from './components/Bottom'
import Nav from './components/Nav'


const App: React.FC = () => {
  

  interface Adventure {
    id:number;
    health: number;
    attack:number;
    accuracy:number;
    weapons:number;
    items:number;
    villains:number
  }


const [page, setPage] = useState<boolean>(true);
  const [adventure, setAdventure] = useState<Adventure[]>([])
  const [hasStarted, setHasStarted] = useState<boolean>(true)

  
  const Space = require('./components/video/space.mp4')

  //////////////////////Game Variables///////////////////////
const [health, setHealth] = useState<number>(0)
const [attack, setAttack] = useState<number>(0)
const [accuracy, setAccuracy] = useState<number>(0)
  const [items, setItems] = useState<[number, string][]>([[50, 'Health Potion'], [10, 'Weapon Upgrade'], [0.2, 'Accuracy Potion'], [40, 'Weapon Upgrade'], [50, 'Item Upgrade'], [60, 'Villain Upgrade']])

  const [villains, setVillains] = useState<[number, number, string][]>([[20, 10, 'Maldroid'], [30,15,'Zetan Warrior'], [40, 20, 'Elki'], [50, 25, 'Elzi'], [55, 25, 'Elti']])
  const [level, setLevel] = useState<number>(1)
  const [shopOpen, setShopOpen] = useState<boolean>(false)
  const [bank, setBank] = useState<number>(0)
  const [resources, setResources] = useState<number>(0)
  const [playerInventory, setPlayerInventory] = useState<[number, string][]>([])
  //////////////////////Game Variables///////////////////////
  
  

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

    const handleUpdate = (editAdventure:Adventure): any => {
      console.log(editAdventure)
      axios.put("https://adventure-back-end.herokuapp.com/api/adventure/" + editAdventure.id, editAdventure)
        .then((response) => {
          getAdventures()
        })
    }

    const handleDelete = (data:Adventure) => {
      axios.delete("https://adventure-back-end.herokuapp.com/api/adventure/" + data.id)
      .then((res) => {
        getAdventures()
      })
      .catch((err) => console.log(err))
    }

   
    useEffect(() => {
      getAdventures()
      setHealth(adventure.length ? adventure[0].health : 0)
      setAttack(adventure.length ? adventure[0].attack : 0)
      setAccuracy(adventure.length ? adventure[0].accuracy : 0)
    }, [adventure])

  

    return (
      <div className="App container-fluid">
        {hasStarted ?
        <>
        <video className='space-video' autoPlay loop muted>
          <source src={Space} type='video/mp4'/>
        </video>
        <div className="start-container">
          <div className="start-title ">Space Invaders</div>
          <div className="start-text" onClick={() => setHasStarted(false)}>Start Game</div>
        </div>
        </>
          : 
        <div className="main container-fluid">
          <Left adventure={adventure} setAdventure={setAdventure} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy}/>
          <div className="right">
          <Middle adventure={adventure} setAdventure={setAdventure} setPage={setPage} page={page} villains={villains} setVillains={setVillains} level={level} setLevel={setLevel} shopOpen={shopOpen} setShopOpen={setShopOpen} bank={bank} setBank={setBank} resources={resources} setResources={setResources} playerInventory={playerInventory} setPlayerInventory={setPlayerInventory} items={items} setItems={setItems} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy} />
            
          <Bottom adventure={adventure} setAdventure={setAdventure} setPage={setPage} page={page} villains={villains} setVillains={setVillains} level={level} setLevel={setLevel} shopOpen={shopOpen} setShopOpen={setShopOpen} bank={bank} setBank={setBank} resources={resources} setResources={setResources} playerInventory={playerInventory} setPlayerInventory={setPlayerInventory} items={items} setItems={setItems} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy}/>
          </div>
        </div>
}
      </div>
    );
}

export default App;


