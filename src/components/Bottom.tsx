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


  const Bottom: React.FC<Props> = ({ setPage, page, adventure, level, setLevel, name, setName, shopOpen, resources, setResources, health, setHealth, choice, setChoice, bank, setBank, battle, setBattle, villains, setVillains, attack, items, playerInventory, setPlayerInventory  }) => {

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

    const showPage = () => {
        setPage(false)
        console.log(setPage);
    }

    //Set the Choice
    const makeChoice: any = (num: number) => {
        setChoice(num);
    }

    ///////////////Game Functions/////////////////////
    const storyChoice = () => {
        if (level === 1 && choice === 1) {
            setResources(resources + 10);
            setBank(bank + 10);
        } else if (level === 1 && choice === 2) {
            setResources(resources + 20);
            setBank(bank + 10);
        }
    }

    const shoot = () => {
        if (battle) {
          setVillains(prevVillains => {
            prevVillains[0][0] = (prevVillains[0][0] - (attack/2));
            console.log(villains);
            return prevVillains; 
          }
          );
        }
      };

      const useItem = () => {
        if (battle) {
            setHealth(health + playerInventory[0][0]);
            playerInventory.pop()
        }
    }
///////////////Game Functions/////////////////////


    const [delayed, setDelayed] = useState(false);

useEffect(() => {
if (delayed) {
    setTimeout(() => storyChoice(), 1000);
}
}, [delayed])



    return(
        <div className="bottom">
            <h1>Control Panel</h1>
            {level === 0 ? 
            <button onClick={() => {getName(); levelStory(1)}}>Enter Name</button>
            : null}

            
                {level === 1 && choice === 0 ?
            <>
            <button onClick={() => { makeChoice(1);  setDelayed(true) }}>Choose to Help the Aliens</button>

            <button onClick={() => { makeChoice(2);  setDelayed(true); setBattle(true) }}>Choose not to Help the Aliens</button>

           
            </>
                : null}

            {level === 1 && battle ?
            <>
            <button onClick={shoot} >Shoot Laser Blaster</button>
            <button onClick={useItem} >Use Item</button>
            <button onClick={() => {setBattle(false)}} >Abort Battle</button>
            </>
            : null}

            {shopOpen ? <button onClick={() => showPage()}>Go To Store</button> : null}
        </div>
    )
}
  

  export default Bottom