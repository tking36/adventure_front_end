

interface Props {
    health: number;
    setHealth: React.Dispatch<React.SetStateAction<number>>;
    attack: number;
    setAttack: React.Dispatch<React.SetStateAction<number>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    level: number;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    
}


const User: React.FC<Props> = ({ health, attack, name,level  }) => {

    const User = require ('./images/User.png')
    const UserBG = require ('./images/Matrix.gif')

    return(
        <div className="user">
            
            <h1 className='user-title'>{name ? name : "User"}</h1>
            <img src={UserBG} alt="" className="user-image-bg" />
            <img src={User} alt="" className={level === 0 ? "user-image0" : "user-image"} />
            <img src="https://i.imgur.com/D9MyDCG.png" alt="" className="user-image-card" />
            
           
            {level === 7 || level === 0? <h2 className="user-health">Health:{health}</h2> : <h2 className="user-health">Health:{health}</h2> }
            <h2 className="user-attack">Attack:{attack}</h2>
            {/* <h3 className="user-resources">Resources: {resources}</h3> */}
            
           
            
        </div>
    )
}

export default User