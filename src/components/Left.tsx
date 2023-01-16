
import User from './User'
import Inventory from './Inventory'
import Info from './Info'

interface Props {
    adventure: Adventure[];
    setAdventure: React.Dispatch<React.SetStateAction<Adventure[]>>;
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

const Left: React.FC<Props> = ({ adventure, setAdventure }) => {
    return(
        <div className="left">
            <User adventure={adventure} setAdventure={setAdventure}/>
            <Info/>
            <Inventory/>
        </div>
    )
}

export default Left
