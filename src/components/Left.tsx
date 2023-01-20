
import User from './User'
import Inventory from './Inventory'
import Info from './Info'

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

const Left: React.FC<Props> = ({ adventure, setAdventure, health, setHealth, attack, setAttack, accuracy,setAccuracy, playerInventory, setPlayerInventory , level, setLevel, name, setName, choice, setChoice, resources, setResources, bank, setBank, battle, setBattle, villains, setVillains, shopOpen, setShopOpen, visible, setVisible }) => {
    return(
        <div className="left">
            <User adventure={adventure} setAdventure={setAdventure} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy} name={name} setName={setName} resources={resources} setResources={setResources}/>
            <Info health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy} level={level} setLevel={setLevel} playerInventory={playerInventory} setPlayerInventory={setPlayerInventory} name={name} setName={setName} choice={choice} setChoice={setChoice} resources={resources} setResources={setResources} battle={battle} setBattle={setBattle} villains={villains} setVillains={setVillains} shopOpen={shopOpen} setShopOpen={setShopOpen} visible={visible} setVisible={setVisible}/>
            <Inventory playerInventory={playerInventory} setPlayerInventory={setPlayerInventory} resources={resources} setResources={setResources} bank={bank} setBank={setBank} battle={battle} setBattle={setBattle} visible={visible} setVisible={setVisible} level={level} setLevel={setLevel} choice={choice} setChoice={setChoice}/>
        </div>
    )
}

export default Left
