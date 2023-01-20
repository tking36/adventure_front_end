

interface Props {
    adventure: Adventure[];
    setAdventure: React.Dispatch<React.SetStateAction<Adventure[]>>;
    health: number;
    setHealth: React.Dispatch<React.SetStateAction<number>>;
    attack: number;
    setAttack: React.Dispatch<React.SetStateAction<number>>;
    accuracy: number;
    setAccuracy: React.Dispatch<React.SetStateAction<number>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    resources: number;
    setResources: React.Dispatch<React.SetStateAction<number>>
    
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

const User: React.FC<Props> = ({ adventure, health, attack, accuracy,name, resources  }) => {


    return(
        <div className="user">
            <h1 className='user-title'>{name ? name : "User"}</h1>
            <img src="https://i.imgur.com/Um35ZtJ.png" alt="" className="user-image" />
            <img src="https://i.imgur.com/D9MyDCG.png" alt="" className="user-image-card" />
            <h2 className="user-health">Health: {health}</h2>
            <h2 className="user-attack">Attack: {attack}</h2>
            <h3 className="user-resources">Resources: {resources}</h3>
        </div>
    )
}

export default User