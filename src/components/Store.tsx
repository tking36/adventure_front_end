import React, { useState } from 'react';

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

const Store: React.FC<Props> = ({ setPage, adventure, items, setBank, setPlayerInventory, playerInventory, bank, health, setHealth, setAttack, attack, setShopOpen, level, setLevel }) => {

    const [buyItem , setBuyItem] = useState(false)


    const buy = (num:number) => {
            if (num === 1) {
                setHealth(health += 10)
            } else if (num === 2)  {
                setAttack(attack += 5)
            }
    }



    const showPage = () => {
        setPage(true)
        console.log(setPage);
    }

    return(
        
        <div className="store">
            {level === 7 ?  
            <>
            <h1>Before you begin your journey</h1>
            <h1>Choose a Health Upgrade or Weapon Upgrade</h1>
            
                <div className="store-item">
                    <h3>{items[0][1]}</h3>
                    <p>Price: {items[0][0]}</p>
                    <button onClick={() => {buy(1); setPage(true); setShopOpen(false); setLevel(0)} }>Buy</button>
                </div>
                <div className="store-item">
                    <h3>{items[1][1]}</h3>
                    <p>Price: {items[1][0]}</p>
                    <button onClick={() => {buy(2); setPage(true); setShopOpen(false); setLevel(0)} }>Buy</button>
                </div>
                </>
                : null}
        </div>
        
        
    )
}

export default Store