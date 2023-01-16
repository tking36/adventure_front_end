

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

const User: React.FC<Props> = ({ adventure }) => {


    return(
        <div className="user">
            <h1 className='user-title'>Taylor</h1>
            <img src="https://i.imgur.com/Um35ZtJ.png" alt="" className="user-image" />
            <img src="https://i.imgur.com/D9MyDCG.png" alt="" className="user-image-card" />
            <h2 className="user-health">Health: {adventure[0].health}</h2>
            <h2 className="user-attack">Attack: {adventure[0].attack}</h2>
        </div>
    )
}

export default User