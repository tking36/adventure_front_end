

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

const Store: React.FC<Props> = ({ setPage, adventure }) => {

    const showPage = () => {
        setPage(true)
        console.log(setPage);
    }

    return(
        <div className="store">
            <h1>Store</h1>
            <h1>{adventure[0].health}</h1>
            <button onClick={() => showPage()}> Go To Story</button>
        </div>
    )
}

export default Store