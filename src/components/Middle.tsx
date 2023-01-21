
import Story from './Story'
import Store from './Store'

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
    battle: boolean;
    setBattle: React.Dispatch<React.SetStateAction<boolean>>;
    handleBattle: () => void
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    userAttackMessage: string;
    setUserAttackMessage: React.Dispatch<React.SetStateAction<string>>;
    itemMessage: string;
    setItemMessage: React.Dispatch<React.SetStateAction<string>>;
    villainAttackMessage: string;
    setVillainAttackMessage: React.Dispatch<React.SetStateAction<string>>;
    choice: number;
    setChoice: React.Dispatch<React.SetStateAction<number>>;
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

const Middle: React.FC<Props> = ({ setPage, page, adventure, setAdventure, villains, setVillains, health, setHealth, attack,setAttack, accuracy, setAccuracy, items, setItems, level, setLevel, shopOpen, setShopOpen, bank, setBank, resources, setResources, playerInventory, setPlayerInventory, battle, setBattle, handleBattle, message, setMessage, visible, setVisible, setUserAttackMessage, userAttackMessage, itemMessage, setItemMessage, villainAttackMessage, setVillainAttackMessage, choice, setChoice, ignite, setIgnite}) => {
    const Stars = require('./video/Stars.mp4')

return(
    <div className="middle">
        <video className='stars-video' autoPlay loop muted>
                <source src={Stars} type='video/mp4'/>
        </video>
        { page ?  <Story adventure={adventure} setAdventure={setAdventure} setPage={setPage} page={page} villains={villains} setVillains={setVillains} level={level} setLevel={setLevel} shopOpen={shopOpen} setShopOpen={setShopOpen} bank={bank} setBank={setBank} resources={resources} setResources={setResources} playerInventory={playerInventory} setPlayerInventory={setPlayerInventory} items={items} setItems={setItems} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy} battle={battle} setBattle={setBattle} message={message} setMessage={setMessage} handleBattle={handleBattle} visible={visible} setVisible={setVisible} userAttackMessage={userAttackMessage} setUserAttackMessage={setUserAttackMessage} itemMessage={itemMessage} setItemMessage={setItemMessage} villainAttackMessage={villainAttackMessage} setVillainAttackMessage={setVillainAttackMessage} choice={choice} setChoice={setChoice} ignite={ignite} setIgnite={setIgnite}/> 
        : 
        <Store adventure={adventure} setAdventure={setAdventure} setPage={setPage} page={page} villains={villains} setVillains={setVillains} level={level} setLevel={setLevel} shopOpen={shopOpen} setShopOpen={setShopOpen} bank={bank} setBank={setBank} resources={resources} setResources={setResources} playerInventory={playerInventory} setPlayerInventory={setPlayerInventory} items={items} setItems={setItems} health={health} setHealth={setHealth} attack={attack} setAttack={setAttack} accuracy={accuracy} setAccuracy={setAccuracy} ignite={ignite} setIgnite={setIgnite}/>} 
    </div>
)
}

export default Middle
