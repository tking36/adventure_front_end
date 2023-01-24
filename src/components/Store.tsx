
interface Props {
    setPage: React.Dispatch<React.SetStateAction<boolean>>;
    health: number;
    setHealth: React.Dispatch<React.SetStateAction<number>>;
    attack: number;
    setAttack: React.Dispatch<React.SetStateAction<number>>;
    items: [number, string][];
    setItems: React.Dispatch<React.SetStateAction<[number, string][]>>;
    level: number;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    shopOpen: boolean;
    setShopOpen: React.Dispatch<React.SetStateAction<boolean>>;
    resources: number;
    setResources: React.Dispatch<React.SetStateAction<number>>
    ignite: boolean;
    setIgnite: React.Dispatch<React.SetStateAction<boolean>>;
}


const Store: React.FC<Props> = ({ setPage, items,  health, setHealth, setAttack, attack, setShopOpen, level, setLevel, setIgnite }) => {

    const buy = (num:number) => {
            if (num === 1) {
                setHealth(health += 10)
            } else if (num === 2)  {
                setAttack(attack += 5)
            }
    }
    const blastOff = () => {
        setIgnite(true);
        setTimeout(() => {
            setIgnite(false);
        }, 3000);
    }



    const showPage = () => {
        setPage(true)
        console.log(setPage);
    }

    return(
        
        <div className="store">
            {level === 7 ?  
            <>
            <h1 className='howto'>Before you begin your journey</h1>
            <h1 className='howto'>Choose a Health Upgrade or Weapon Upgrade</h1>
            
                <div className="store-item howto">
                    <h3>{items[0][1]}</h3>
                    <div className='button' onClick={() => {buy(1); setPage(true); setShopOpen(false); setLevel(0); blastOff()} }>Buy</div>
                </div>
                <div className="store-item howto">
                    <h3>{items[1][1]}</h3>
                    <div className='button' onClick={() => {buy(2); setPage(true); setShopOpen(false); setLevel(0); blastOff()} }>Buy</div> 
                </div>
                </>
                : null}
        </div>
        
        
    )
}

export default Store