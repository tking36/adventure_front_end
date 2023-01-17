
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

const Left: React.FC<Props> = ({ adventure, setAdventure, health, setHealth, attack, setAttack, accuracy,setAccuracy }) => {
    return(
        <div className="left">
            <User adventure={adventure} setAdventure={setAdventure} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy}/>
            <Info/>
            <Inventory/>
        </div>
    )
}

export default Left
