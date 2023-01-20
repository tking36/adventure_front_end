import React, { useState, useEffect} from 'react'
import Choices from './Choices'

interface Props {
    adventure: Adventure[];
    setAdventure: React.Dispatch<React.SetStateAction<Adventure[]>>;
    setPage: React.Dispatch<React.SetStateAction<boolean>>;
    page: boolean;
    villains: [number, number, string][];
    setVillains: React.Dispatch<React.SetStateAction<[number, number, string][]>>;
    health: number;
    setHealth: React.Dispatch<React.SetStateAction<number>>;
    attack: number;
    setAttack: React.Dispatch<React.SetStateAction<number>>;
    accuracy: number;
    setAccuracy: React.Dispatch<React.SetStateAction<number>>;
    items: [number, string][];
    setItems: React.Dispatch<React.SetStateAction<[number, string][]>>;
    level: number;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    shopOpen: boolean;
    setShopOpen: React.Dispatch<React.SetStateAction<boolean>>;
    bank: number;
    setBank: React.Dispatch<React.SetStateAction<number>>;
    resources: number;
    setResources: React.Dispatch<React.SetStateAction<number>>
    playerInventory: [number, string][];
    setPlayerInventory: React.Dispatch<React.SetStateAction<[number, string][]>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    choice: number;
    setChoice: React.Dispatch<React.SetStateAction<number>>
    battle: boolean;
    setBattle: React.Dispatch<React.SetStateAction<boolean>>;
    handleBattle: () => void
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    
}

interface Adventure {
    id:number;
    health: number;
    attack:number;
    accuracy:number;
    weapons:number;
    items:number;
    villains:number
  }


  const Bottom: React.FC<Props> = ({ setPage, page, adventure, level, setLevel, name, setName, shopOpen, resources, setResources, health, setHealth, choice, setChoice, bank, setBank, battle, setBattle, villains, setVillains, attack, items, playerInventory,accuracy,setPlayerInventory, handleBattle, visible, setVisible, message, setMessage,setAttack, setShopOpen }) => {

    const [battleComplete, setBattleComplete] = useState(false);
    

    //Name Prompt
    const getName: any = () => {
        let name = window.prompt("What is your name?");
        if (name) {
            setName(name);
        }
    }

    const levelStory:any =  (num:number) =>  {
        setLevel(num)
      }

    //Set the Choice
    const makeChoice: any = (num: number) => {
        setChoice(num);
    }

    //Next Level After Battle   
    

    ///////////////Game Functions/////////////////////
    const storyChoice = () => {
        if (level === 1 && choice === 1) {
            setResources(resources + 10);
        } else if (level === 1 && choice === 2) {
            setResources(resources + 20);
        } else if (level === 2 && choice === 1) {
            setResources(resources + 20);
        } else if (level === 2 && choice === 2) {
            setAttack(attack + 10);
        } else if (level === 3 && choice === 1) {
            setHealth(health - 20);
        } else if (level === 3 && choice === 2) {
            setResources(resources + 20);
        } else if (level === 4 && choice === 1) {
            setResources(resources + 20);
        }
    }

    const updateBank = () => {
        setBank(1);
        setTimeout(() => {
            setBank(0);
        }, 700);
    }

    const checkHealth = () => {
        setTimeout(() => {
            villains.forEach((villain, index) => {
                if (villain[0] <= 0) {
                    setBattle(false);
                    setLevel(level + 1);
                    setChoice(0);
                    setShopOpen(true);
                }
                updateBank();
            });
        }, 1);
    }

    ///remove first villain when villain health is 0
    const removeVillain = () => {
        let newVillains = villains;
        newVillains.shift();
        setVillains(newVillains);
    }

///////////////Game Functions/////////////////////

console.log(level);
console.log(choice);
console.log(bank);


const [delayed, setDelayed] = useState(false);

useEffect(() => {
if (delayed) {
    setTimeout(() => storyChoice(), 1000);
}
}, [delayed])


    return(
        <div className="bottom">
            {level === 0 && shopOpen ? <h1>How To Play</h1> : <h1>Control Panel</h1> }

            {level === 0 && shopOpen ?
            <>
            <h1>Earth Sends You To Collect Resources</h1>
            <h1>Make The Best Choice When Faced With A Difficult Situation</h1>
            <h1>Return to Earth With Resources To Save Humanity</h1>
            <button onClick={() => {setShopOpen(false); setLevel(7)}}>Begin Journey</button>
            </>
            : null}

            {level  === 0 && !shopOpen  ? 
            <button onClick={() => {getName(); levelStory(1); setVisible(false)}}>Enter Name</button>
            : null}

            
                {level === 1 && choice === 0 && visible ?
            <>
            <button onClick={() => { makeChoice(1);  setDelayed(true); setVisible(false) }}>Choose to Help the Aliens</button>

            <button onClick={() => { makeChoice(2);  setDelayed(true); setVisible(false)}}>Choose not to Help the Aliens</button>

           
            </>
                : null}

            {level === 1 && choice === 2 && !battle && visible ?
            <>
            <button onClick={() => {setBattle(true); setResources(resources + 10); setVisible(false)}} >Battle</button>
            </>
            : null}

            {level ===1 && choice === 1 && visible ? 
            <>
            <button onClick={() => {setLevel(2); setChoice(0); setDelayed(false); setVisible(false)}} >Ignite Engines</button>
            </>
            : null}
            
            

            {level === 1 && battle ?
            <>
            <button onClick={() => {handleBattle(); checkHealth(); setDelayed(false) }} >Shoot Laser Blaster</button>
            </>
            : null}

            {level === 2 && choice === 0 && visible ? 
            <>
            
            <button onClick={() => { makeChoice(1); setBattle(false);  setDelayed(true); removeVillain(); setVisible(false) }}>Choose to take Resources</button>
            <button onClick={() => { makeChoice(2); setBattle(false);  setDelayed(true); removeVillain(); setVisible(false)}}>Choose to take Laser Gun</button>
            </>
            : null}

            

            {level === 2 && choice != 0 && visible ? 
            <>
            <button onClick={() => {setLevel(3); setChoice(0); setVisible(false)}} >Ignite Engines</button>
            </>
            : null}

            {level === 3 && choice === 0 && visible ?
            <>
            <button onClick={() => { makeChoice(1);  setDelayed(true); setVisible(false) }}>Choose to Run</button>
            <button onClick={() => { makeChoice(2);  setDelayed(true); setVisible(false) }}>Choose to Battle</button>
            </>
            : null}

            {level === 3 && choice === 1 && visible ?
            <>
            
            <button onClick={() => {setLevel(4); setChoice(0); setVisible(false)}} >Ignite Engines</button>
            </>
            : null}

            {level === 3 && choice === 2 && !battle && visible ?
            <>
            <button onClick={() => {setBattle(true); storyChoice(); setResources(resources + 10); setVisible(false)}} >Battle</button>
            </>
            : null}

            {level === 3 && battle ?
            <>
            <button onClick={() => {handleBattle(); checkHealth(); setDelayed(false);}} >Shoot Laser Blaster</button>
            </>
            : null}

            {level === 4 && choice === 0 && visible?
            <>
            <button onClick={() => {setChoice(1); removeVillain(); setVisible(false)}} >Choose to Fight</button>
            <button onClick={() => { setChoice(2); removeVillain(); setVisible(false) }} >Choose to Run</button>
            </>
            : null}

            {level === 4 && choice === 1 && !battle && visible ?
            <>
            <button onClick={() => {setBattle(true); setResources(resources + 10); setBattleComplete(true)}} >Battle</button>
            </>
            : null}

            {level === 4 && battle ?
            <>
            <button onClick={() => {handleBattle(); checkHealth(); setDelayed(false) }} >Shoot Laser Blaster</button>
            </>
            : null}

            {level === 4 && choice != 0 && visible ?
            <>
            
            <button onClick={() => {setLevel(5); setChoice(0); setVisible(false)}} >Ignite Engines</button>
            </>
            : null}

            {level === 5 && choice === 0 && visible ?      
            <>
            <button onClick={() => {setLevel(5); setChoice(1); setVisible(false)}} >Travel to Earth</button>
            </>
            : null}

            {level === 5 && choice === 1 && visible?
            <>
            <button onClick={() => {setChoice(2);}} >Land Ship on Earth</button>
            </>
            : null}

            {level === 5 && choice === 2 ?
            <>
            <h1>Congratulations!!! Earth is Saved!</h1>
            <h1>GAME OVER</h1>
            </>
            : null}

            {health <= 0 ?
            <>
            <h1>GAME OVER</h1>
            </>
            : null}
        </div>
    )
}
  

  export default Bottom