

interface Props {
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
    battle: boolean;
    setBattle: React.Dispatch<React.SetStateAction<boolean>>;
    handleBattle: () => void
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    userAttackMessage: string;
    setUserAttackMessage: React.Dispatch<React.SetStateAction<string>>;
    villainAttackMessage: string;
    setVillainAttackMessage: React.Dispatch<React.SetStateAction<string>>;
    choice: number;
    setChoice: React.Dispatch<React.SetStateAction<number>>;
    ignite: boolean;
    setIgnite: React.Dispatch<React.SetStateAction<boolean>>;
}


const Story: React.FC<Props> = ({  villains, battle, visible, userAttackMessage,  villainAttackMessage, level, choice, bank, ignite,resources  }) => {

    const Cockpit = require('./images/cockpit.png')
    const Earth = require('./images/Earth.png')
    const Planet1 = require('./images/Planet1.png')
    const Planet2 = require('./images/Planet2.png')
    const Offering = require('./images/Offering.png')
    const Ship = require('./images/Ship.png')
    const Mining = require('./images/Mining.png')
    const Frozen = require('./images/Frozen.png')
    const Bomb = require('./images/Bomb.gif')
    const Ship2 = require('./images/Ship2.png')
    const Attack = require('./images/Attack.gif')
    const Astroids = require('./images/Astroids.png')
    const Ship3 = require('./images/Ship3.png')
    const Home = require('./images/Home.png')
    const Ignite = require('./images/Ignite.gif')
    const Fireworks = require('./images/Fireworks.gif')
    
    
    
   
    
   

    return(
        <div className="story">
            {level === 0 || level === 1 && choice != 1 || level === 2 && choice != 1 && choice != 2 || level === 3 || level === 4 || level === 5 && choice != 2? <img className='cockpit-png' src={Cockpit} alt=""/> 
            : null}
            { level === 1 && choice === 2 ?
            <>
             <div className="message">{userAttackMessage}</div> 
             <div className="vmessage">{villainAttackMessage}</div>  
             </>
             : null }

             

            { level === 0 && choice === 0 ?
            <>
                <div className="glow-middle4"></div>
                <img src={Earth} alt="" className="left-window" />
            </>
            : null }

            { level === 1 && choice === 0 ?
            <>
                <div className="glow-middle"></div>
                <img src={Planet1} alt="" className="middle-window" />
            </>
            : null }

            { level === 1 && choice === 1 ?
            <>
                <img src={Mining} alt="" className="planet1-land" />
                <h1 className="message-win">Resources +10</h1>
            </>
            : null }

            { level === 1 && choice === 2 ?
            <>
                <div className="glow-middle3"></div>
                <img src={Frozen} alt="" className="middle-window2" />
                <img src={Ship} alt="" className="middle-window" />
                {bank === 1 ? <img src={Attack} alt="" className="middle-window5" />   : null}
                
            </>
            : null }

            { level === 2 && villains[0][0] <= 0 ?
            <>
                <h1 className="message-win">Maledroid is Defeated</h1>
            </>
            : null }

            {level === 2 && choice === 0 ? 
            <>
                <div className="glow-middle2"></div>
                <img src={Planet2} alt="" className="middle-window2" />
                {ignite? 
                <>
                <img src={Ignite} alt="" className="booster1" />
                <img src={Ignite} alt="" className="booster2" />
                </>
                : null}
                
            </>
            : null}

            {level === 2 && choice != 0  ?
            <>
                <img src={Offering} alt="" className="offering" />
            </>
            : null}

            {level === 2 && choice === 1 ?
            <>
            <h1 className="message-win">Resources +20</h1>
            </>
            : null}

            {level === 2 && choice === 2 ?
            <>
            <h1 className="message-win">Attack +10</h1>
            </>
            : null}

            {level === 3 && choice === 0  ?
            <>
                <div className="glow-middle5 "></div>
                <div className="glow-middle6 "></div>
                <img src={Frozen} alt="" className="middle-window2" />
                {ignite? 
                <>
                <img src={Ignite} alt="" className="booster1" />
                <img src={Ignite} alt="" className="booster2" />
                </>
                : null}
            </>
            : null}

            {level === 3 && villains[0][0] <= 0 ?
            <>
                <h1 className="message-win">Zetan Warrior is Defeated</h1>
            </>
            : null }

            {level === 3 && choice === 1 ?
            <>
            <img src={Frozen} alt="" className="middle-window2" />
            <img src={Bomb} alt="" className="middle-window3" />
            <h1 className="message-win1">Health -20 <br></br>Resources +0</h1>
            </>
            : null}

            {level === 3 && choice === 2 && !battle && visible ?
            <>
            
            </>
            : null}

            {level === 3 && choice === 2  ?
            <>
                <div className="glow-middle5 "></div>
                <div className="glow-middle6 "></div>
                <img src={Frozen} alt="" className="middle-window2" />
                <img src={Ship2} alt="" className="middle-window3" />
                {bank === 1 ? <img src={Attack} alt="" className="middle-window5" />   : null}
            </>
            : null} 

            

            

            {level === 3 &&  battle && villains[0][0] < 30 ?
            <>
                <div className="message">{userAttackMessage}</div>
                <div className="vmessage">{villainAttackMessage}</div>
            </>
            : null}

            {level === 4 && villains[0][0] <= 0 && choice === 0 ?
            <>
            <h1 className="message-win1">Zetan Warrior Defeated <br></br> Resources +30</h1>
            </>
            : null}

            {level === 4 && choice === 0 ?
            <>
            
            <div className="glow-middle3"></div>
                <img src={Earth} alt="" className="middle-window4" />
                <img src={Astroids} alt="" className="middle-window6" />
                {ignite? 
                <>
                <img src={Ignite} alt="" className="booster1" />
                <img src={Ignite} alt="" className="booster2" />
                </>
                : null}
            </>
            : null}

            {level === 4 && choice === 1 ?
            <>
            
                <div className="glow-middle3"></div>
                <img src={Earth} alt="" className="middle-window4" />
                <img src={Astroids} alt="" className="middle-window6" />
                <img src={Ship3} alt="" className="middle-window2" />
                {bank === 1 ? <img src={Attack} alt="" className="middle-window5" />   : null}
            </>
            : null}

            {level === 4 && battle && villains[0][0] < 40 ?
            <>
                <div className="message">{userAttackMessage}</div> 
                <div className="vmessage">{villainAttackMessage}</div>  
            </>
            : null }

            {level === 4 && choice === 2 ?
            <>
            <h1 className="message-win">Resources +0</h1>
            <div className="glow-middle3"></div>
            <img src={Earth} alt="" className="middle-window4" />
            <img src={Astroids} alt="" className="middle-window6" />
            </>
            : null}

            {level === 5 && choice === 0 ?
            <>
            <div className="glow-middle3"></div>
                <img src={Earth} alt="" className="middle-window4" />
                <img src={Astroids} alt="" className="middle-window6" />
                {ignite? 
                <>
                <img src={Ignite} alt="" className="booster1" />
                <img src={Ignite} alt="" className="booster2" />
                </>
                : null}
                {villains[0][0] <= 0 ? <h1 className="message-win">Elki Defeated</h1> : <h1 className="message-win">Resources +0</h1>}
            </>
            : null}     

        

            {level === 5 && choice === 1 ?
            <>
                <div className="glow-middle5"></div>
                <img src={Earth} alt="" className="middle-window2" />
                {ignite? 
                <>
                <img src={Ignite} alt="" className="booster1" />
                <img src={Ignite} alt="" className="booster2" />
                </>
                : null}
            </>
            : null}

            {level === 5 && choice === 2 ?
            <>
                
                <img src={Home} alt="" className="offering" />
                <img src={Fireworks} alt="" className="middle-window7" />
                
            </>
            : null}
            
                
            {!battle && (level === 0 || level === 1 && choice != 1 || level === 2 && choice != 1 && choice != 2 || level === 3 || level === 4 || level === 5 && choice != 2) ?
            <div className="resources">Resources: <br></br>{resources}</div>
            : null}

            

            
        </div>


    )
}

export default Story
