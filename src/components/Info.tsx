<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>


interface Props {
    health: number;
    setHealth: React.Dispatch<React.SetStateAction<number>>;
    attack: number;
    setAttack: React.Dispatch<React.SetStateAction<number>>;
    accuracy: number;
    setAccuracy: React.Dispatch<React.SetStateAction<number>>;
    playerInventory: [number, string][];
    setPlayerInventory: React.Dispatch<React.SetStateAction<[number, string][]>>;
    level: number;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    choice: number;
    setChoice: React.Dispatch<React.SetStateAction<number>>;
    resources: number;
    setResources: React.Dispatch<React.SetStateAction<number>>
    battle: boolean;
    setBattle: React.Dispatch<React.SetStateAction<boolean>>;
    villains: [number, number, string][];
    setVillains: React.Dispatch<React.SetStateAction<[number, number, string][]>>;
    shopOpen: boolean;
    setShopOpen: React.Dispatch<React.SetStateAction<boolean>>;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    ignite: boolean;
    setIgnite: React.Dispatch<React.SetStateAction<boolean>>;
}

const Info: React.FC<Props> = ({ playerInventory, setPlayerInventory , level, setLevel, choice, setChoice, resources, setResources, health, setHealth, battle, attack, accuracy, villains, shopOpen,ignite}) => {

    const Alien = require('./images/Alien1.png');
    const Zetan = require('./images/Zetan.png');
    const Elki = require('./images/Elki.png');

    const storyResult = () => {
        if (level === 1 && choice === 1) {
            setResources(resources + 10);
        } else if (level === 1 && choice === 2) {
            setResources(resources + 20);
            setHealth(health + 10);
        }
    }

    

    return(
        <div className={battle? "info-container locked" : "info-container"}>
            {!ignite && !battle ? <h1 className='info-title'>Status</h1> : null}
            {ignite   ? <h1 className='info-title flashing'>Status</h1> : null}
            {/* {ignite ? <h1 className='info-title flashing'>Approaching Planet</h1> :null} */}
                {level === 0 && !shopOpen ?
                <>
                <p  className={ignite? "info info-update" : "info"}> 
                     <span className="type">As the Earth's resources dwindled, governments and</span> <span className="type"> corporations scrambled to find new sources of energy and materials.</span> <span className="type">Desperate times called for desperate measures, and soon a lone astronaut was sent hurtling into the vast expanse of space, tasked with finding new resources to save humanity.</span>
                 </p>
                 </>
            : null}

            {level === 1 && choice === 0 ? 
                <p className={ignite? "info info-update" : "info"}>
                   <span className="type">The astronaut's ship reaches a distant planet with strange structures. An alien contacts them, speaking in a language the astronaut does not understand,</span> <span className="type"> asking for help. The astronaut must decide whether to help the alien or take advantage of their vulnerability.</span>
                </p>
            : null}

            {level === 1 && choice === 1 ?
                <p className={ignite? "info info-update" : "info"}>
                    <span className="type">The astronaut decides to help the alien species. They take the astronaut to their underground city and show them their advanced technology and resource struggles.</span> <span className="type"> The astronaut offers to help find resources and works with the alien leader to save the alien species from extinction.</span>
                </p>
                    : null}

                {level === 1 && choice === 2 && !battle ?
                <p className={ignite? "info info-update" : "info"}>
                    <span className="type">The astronaut chooses not to help the alien and instead sneaks around their city to steal resources.</span> <span className="type"> They are successful at first, but are caught by alien guards and have to fight their way out.</span>
                </p>
                    : null}

                    {/* {level === 1 && choice === 2 && ! battle ?
                    <p className={ignite? "info info-update" : "info"}>
                        <span className="type">The astronaut decided not to offer assistance to the alien species.</span> <span className="type"> The astronaut sneaks around the alien city, looking for resources. They find a room filled with</span> <span className="type"> valuable resources and begin to load them onto their ship. Suddenly, the alien guards arrive and the astronaut is forced to fight their way out.</span>
                    </p>
                        : null} */}
                        
                {level === 1 && battle ? 
                <>
                    <div className="villain-bg"></div>
                <div className="villain-container">

                    <div className="villain-health-container">
                        <h1 className="villain-health">Health</h1>
                        <h1 className="villain-health">{villains[0][0]}</h1>
                    </div>
                    <div className="alien-card">
                        <h1 className="alien-name">Alien</h1>
                        <img className="alien" src={Alien} alt=""/>
                    </div>
                    <div className="villain-attack-container">
                        <h1 className="villain-attack">Attack</h1>
                        <h1 className="villain-attack">{villains[0][1]}</h1>
                    </div>
                </div>
                </>
                : null}

                {level === 2 && choice === 0 ?
                <>
                <p className={ignite? "info info-update" : "info"}>
                <span className="type">The astronaut decides to help the alien species. They take the astronaut to their underground city and show them their advanced technology and resource struggles.</span> <span className="type"> The astronaut offers to help find resources and works with the alien leader to save the alien species from extinction.</span>

                </p>
                </>
                : null}

                {/* {level === 2 && choice === 1 ?
                <p className={ignite? "info info-update" : "info"}>
                    The astronaut makes the decision to help the alien species. The alien takes the astronaut to their underground city where they show them their advanced technology and how they have been struggling to find resources for themselves. The astronaut offers to help the alien species find resources and the alien leader agrees. The astronaut and the alien leader work together to find resources and they are able to save the alien species from extinction.
                </p>
                    : null} */}


                {level === 2 && choice === 1 ?
                 <p className={ignite? "info info-update" : "info"}>
                <span className="type">The astronaut chooses to take resources from the Gorgons and gives a thank you in return.</span> <span className="type"> They leave the planet with the resources, but worry about not having the new laser gun that could protect them from other aliens.</span>
             </p>
                 : null}

                {level === 2 && choice === 2 ?
                 <p className={ignite? "info info-update" : "info"}>
                 <span className="type">The astronaut chooses to take the laser gun from the Gorgons and thanks them. They leave the planet with </span> <span className="type">the weapon but worries about not having taken the resources offered by the Gorgons which could potentially lead to failure of the mission.</span>
             </p>
                 : null}

                {level === 3 && choice === 0 ?
                <>
                <p className={ignite? "info info-update" : "info"}>
                <span className="type">The astronaut encounters a new alien race, the Zetans, who are hostile and do not wish to communicate.</span> <span className="type"> They are faced with a difficult decision: whether to try to run and escape the planet, or to fight the heavily armed Zetan warrior.</span>
                </p>
                </>
                : null}

                {level === 3 && choice === 1 ?
                <p className={ignite? "info info-update" : "info"}>
                <span className="type">The astronaut escaped from hostile Zetans by quickly boarding the ship, dropping a bomb and taking off, while being chased and fired upon by the Zetans.</span> <span className="type"> Despite some damage to the ship, the astronaut was able to outrun them and successfully escape.</span>
                </p>
                : null}

                {level === 3 && choice === 2 && !battle ?
                <p className={ignite? "info info-update" : "info"}>
                    <span className="type">The astronaut chooses to fight the heavily armed Zetan warrior in order to acquire resources for Earth.</span> <span className="type"> The battle is intense and the astronaut is injured but they defeat the warrior and successfully acquire resources from the planet.</span>
                </p>
                : null}

                {level === 3 && battle ?
                <>
                <div className="villain-bg"></div>
            <div className="villain-container">

                <div className="villain-health-container">
                    <h1 className="villain-health">Health</h1>
                    <h1 className="villain-health">{villains[0][0]}</h1>
                </div>
                <div className="alien-card">
                    <h1 className="alien-name">Zetan Warrior</h1>
                    <img className="alien" src={Zetan} alt=""/>
                </div>
                <div className="villain-attack-container">
                    <h1 className="villain-attack">Attack</h1>
                    <h1 className="villain-attack">{villains[0][1]}</h1>
                </div>
            </div>
            </>
                : null}

                {level === 4 && choice === 0 ?
                <>
                <p className={ignite? "info info-update" : "info"}>
                <span className="type">The astronaut's ship is nearing Earth after a successful journey, but picking up a distress signal from a nearby asteroid field.</span> <span className="type"> The astronaut decides to investigate, but is ambushed by a hostile, heavily armed rogue alien.</span>
                </p>
                </>
                : null}

                {level === 4 && choice === 1 && !battle ?
                <p className={ignite? "info info-update" : "info"}>
                    Preparing for Battle
                </p>
                : null}

                {level === 4 && battle ?
                <>
                <div className="villain-bg"></div>
            <div className="villain-container">

                <div className="villain-health-container">
                    <h1 className="villain-health">Health</h1>
                    <h1 className="villain-health">{villains[0][0]}</h1>
                </div>
                <div className="alien-card">
                    <h1 className="alien-name">Elki</h1>
                    <img className="alien" src={Elki} alt=""/>
                </div>
                <div className="villain-attack-container">
                    <h1 className="villain-attack">Attack</h1>
                    <h1 className="villain-attack">{villains[0][1]}</h1>
                </div>
            </div>
            </>
                : null}

                {level === 4 && choice === 2 ?
                <p className={ignite? "info info-update" : "info"}>
                    <span className="type">The astronaut evades the aliens and escapes the asteroid field. The astronaut is relieved that they were able to escape,</span> <span className="type"> but they are also worried that they might have missed an opportunity to acquire more resources.</span>
                </p>
                : null}

                {level === 5 && choice === 0 && villains[0][0] <= 0 ?
                <p className={ignite? "info info-update" : "info"}>
                    <span className="type">The astronaut defeats the alien and acquires resources from the asteroid field.</span> <span className="type"> The astronaut is relieved that they were able to acquire more resources.</span>
                </p>
                : null}

                {level === 5 && choice === 0  ?
                <p className={ignite? "info info-update" : "info"}>
                   <span className="type"> Time to go Home</span>
                </p>
                : null}

                {level === 5 && choice === 1 ?
                <p className={ignite? "info info-update" : "info"}>
                    <span className="type">The astronaut's ship is nearing Earth after a long and difficult journey where the astronaut successfully obtained resources for Earth.</span> <span className="type"> The astronaut is tired but feels a sense of accomplishment as he approaches his home planet.</span>
                </p>
                : null}

                {level === 5 && choice === 2 ?
                <p className={ignite? "info info-update" : "info"}>
                    <span className="type">The astronaut's ship lands on Earth. The astronaut is exhausted but also filled with a sense of accomplishment.</span> <span className="type"> Returning home with the resources is the most important thing to the astronaut, and they are happy to be back on Earth.</span>
                </p>
                : null}
        </div>
    )
}

export default Info