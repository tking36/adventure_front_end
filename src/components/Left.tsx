
import User from './User'
import Inventory from './Inventory'
import Info from './Info'
import React, {useState} from 'react' 


interface Props {
    health: number;
    setHealth: React.Dispatch<React.SetStateAction<number>>;
    attack: number;
    setAttack: React.Dispatch<React.SetStateAction<number>>;
    level: number;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    choice: number;
    resources: number;
    setResources: React.Dispatch<React.SetStateAction<number>>
    battle: boolean;
    setBattle: React.Dispatch<React.SetStateAction<boolean>>;
    villains: [number, number, string][];
    setVillains: React.Dispatch<React.SetStateAction<[number, number, string][]>>;
    shopOpen: boolean;
    setShopOpen: React.Dispatch<React.SetStateAction<boolean>>;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    ignite: boolean;
    setIgnite: React.Dispatch<React.SetStateAction<boolean>>;
    
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

const Left: React.FC<Props> = ({ health, setHealth, attack, setAttack, level, setLevel, name, setName, choice, resources, setResources, battle, setBattle, villains, setVillains, shopOpen, setShopOpen, visible, setVisible, ignite, setIgnite }) => {

    return(
        <div className="left">
            <>
            <User health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} name={name} setName={setName} level={level} setLevel={setLevel}/>
            
            <Info health={health} setHealth={setHealth} level={level} setLevel={setLevel} name={name} setName={setName} choice={choice} resources={resources} setResources={setResources} battle={battle} setBattle={setBattle} villains={villains} setVillains={setVillains} shopOpen={shopOpen} setShopOpen={setShopOpen} visible={visible} setVisible={setVisible} ignite={ignite} setIgnite={setIgnite}/>
            
            <Inventory  battle={battle} setBattle={setBattle} visible={visible} setVisible={setVisible} level={level} setLevel={setLevel} health={health} setHealth={setHealth}/>
            </>
            {/* } */}
        </div>
    )
}

export default Left
