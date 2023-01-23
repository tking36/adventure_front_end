
import User from './User'
import Inventory from './Inventory'
import Info from './Info'
import React, { useState} from 'react' 
import Edit from './Edit'

interface Props {
    adventure: Adventure[];
    setAdventure: React.Dispatch<React.SetStateAction<Adventure[]>>;
    health: number;
    setHealth: React.Dispatch<React.SetStateAction<number>>;
    attack: number;
    setAttack: React.Dispatch<React.SetStateAction<number>>;
    accuracy: number;
    setAccuracy: React.Dispatch<React.SetStateAction<number>>;
    playerInventory: [number, string][];
    setPlayerInventory: React.Dispatch<React.SetStateAction<[number, string][]>>;
    level: number;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    choice: number;
    setChoice: React.Dispatch<React.SetStateAction<number>>;
    resources: number;
    setResources: React.Dispatch<React.SetStateAction<number>>
    bank: number;
    setBank: React.Dispatch<React.SetStateAction<number>>;
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

const Left: React.FC<Props> = ({ adventure, setAdventure, health, setHealth, attack, setAttack, accuracy,setAccuracy, playerInventory, setPlayerInventory , level, setLevel, name, setName, choice, setChoice, resources, setResources, bank, setBank, battle, setBattle, villains, setVillains, shopOpen, setShopOpen, visible, setVisible, ignite, setIgnite }) => {

    const Settings = require('./images/Settings.png')
    const [settingOn , setSettingOn] = useState<boolean>(false)

    return(
        <div className="left">
            {/* {settingOn ? <Edit handleUpdate={handleUpdate} getAdventures={getAdventures} adventure={adventure} setAdventure={setAdventure} id={adventure[index].id} index={index}/> : */}
            <>
            {/* <img onClick={() => {setSettingOn(true)} } src={Settings} alt="" className="settings" /> */}
            <User adventure={adventure} setAdventure={setAdventure} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy} name={name} setName={setName} resources={resources} setResources={setResources} level={level} setLevel={setLevel}/>
            <Info health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy} level={level} setLevel={setLevel} playerInventory={playerInventory} setPlayerInventory={setPlayerInventory} name={name} setName={setName} choice={choice} setChoice={setChoice} resources={resources} setResources={setResources} battle={battle} setBattle={setBattle} villains={villains} setVillains={setVillains} shopOpen={shopOpen} setShopOpen={setShopOpen} visible={visible} setVisible={setVisible} ignite={ignite} setIgnite={setIgnite}/>
            <Inventory playerInventory={playerInventory} setPlayerInventory={setPlayerInventory} resources={resources} setResources={setResources} bank={bank} setBank={setBank} battle={battle} setBattle={setBattle} visible={visible} setVisible={setVisible} level={level} setLevel={setLevel} choice={choice} setChoice={setChoice} health={health} setHealth={setHealth}/>
            </>
            {/* } */}
        </div>
    )
}

export default Left
