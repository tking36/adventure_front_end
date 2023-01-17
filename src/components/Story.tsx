

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

const Story: React.FC<Props> = ({ setPage, page, adventure, villains  }) => {

    const Cockpit = require('./images/cockpit.png')

    
   

    return(
        <div className="story">
            <img className='cockpit-png' src={Cockpit} alt=""/>
            <h1>{villains}</h1>
            {/* <button onClick={() => showPage()}> Go To Store</button> */}
        </div>
    )
}

export default Story
