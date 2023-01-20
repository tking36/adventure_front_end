

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
}

const Info: React.FC<Props> = ({ playerInventory, setPlayerInventory , level, setLevel, choice, setChoice, resources, setResources, health, setHealth, battle, attack, accuracy, villains, shopOpen }) => {

    const Alien = require('./images/Alien.png');
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
        <div className="info-container">
            {!battle ? <h1 className='info-title'>Status</h1> : null}
                {level === 0 && !shopOpen ?
                <>
                <p className="info"> 
                     As the Earth's resources dwindled, governments and corporations scrambled to find new sources of energy and materials. Desperate times called for desperate measures, and soon a lone astronaut was sent hurtling into the vast expanse of space, tasked with finding new resources to save humanity.
                 </p>
                 </>
            : null}

            {level === 1 && choice === 0 ? 
                <p className="info">
                    After months of traveling, the astronaut's ship finally reaches a distant planet. As they prepare to land, they see strange and unfamiliar structures dotting the landscape. Suddenly, a voice crackles over the ship's communications system. It's an alien, speaking in a language the astronaut doesn't understand. The alien seems to be asking for help, but the astronaut is torn. Should they offer assistance and risk becoming embroiled in a complicated and dangerous situation, or should they take advantage of the alien's vulnerability and steal whatever resources they can find? The choice is yours
                </p>
            : null}

            {level === 1 && choice === 1 ?
                <p className="info">
                    The astronaut makes the decision to help the alien species. The alien takes the astronaut to their underground city where they show them their advanced technology and how they have been struggling to find resources for themselves. The astronaut offers to help the alien species find resources and the alien leader agrees. The astronaut and the alien leader work together to find resources and they are able to save the alien species from extinction.
                </p>
                    : null}

                {level === 1 && choice === 2 && !battle ?
                <p className="info">
                    The astronaut decided not to offer assistance to the alien species. The astronaut sneaks around the alien city, looking for resources. They find a room filled with valuable resources and begin to load them onto their ship. Suddenly, the alien guards arrive and the astronaut is forced to fight their way out.
                </p>
                    : null}

                {level === 1 && battle ? 
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
                : null}

                {level === 2 && choice === 0 ?
                <>
                <p className="info">
                    The astronaut continues their journey through space, scanning for new resources. Suddenly, the ship's sensors pick up a new alien race nearby. The astronaut approaches the planet cautiously, not sure what to expect. As they land, they see strange, humanoid creatures with writhing tentacles instead of hair. These aliens introduce themselves as the Gorgons.
                </p>
                <p className="info"> 
                    The astronaut establishes contact over the ship's communication system, trying to communicate with the Gorgons. The Gorgons speak a language that is difficult to understand, but the astronaut manages to make out a few words. They offer the astronaut resources or a new laser gun. The astronaut is torn between taking the resources, or the new laser gun, which could potentially be very useful in their journey.
                </p>
                </>
                : null}

                {level === 2 && choice === 1 ?
                <p className="info">
                    The astronaut makes the decision to help the alien species. The alien takes the astronaut to their underground city where they show them their advanced technology and how they have been struggling to find resources for themselves. The astronaut offers to help the alien species find resources and the alien leader agrees. The astronaut and the alien leader work together to find resources and they are able to save the alien species from extinction.
                </p>
                    : null}

                {level === 1 && choice === 2 ?
                <p className="info">
                    The astronaut decided not to offer assistance to the alien species. The astronaut sneaks around the alien city, looking for resources. They find a room filled with valuable resources and begin to load them onto their ship. Suddenly, the alien guards arrive and the astronaut is forced to fight their way out.
                </p>
                    : null}

                {level === 2 && choice === 1 ?
                 <p className="info">
                 The astronaut decides to take the resources offered by the Gorgons. The Gorgons give the astronaut the resources, and in return, the astronaut gives them a heartfelt thank you. The astronaut leaves the planet, feeling relieved that they've acquired valuable resources for Earth. The astronaut worries that not having the new laser gun could result in being left vulnerable to other aliens.
             </p>
                 : null}

                {level === 2 && choice === 2 ?
                 <p className="info">
                 The astronaut decides to take the laser gun offered by the Gorgons. The Gorgons give the astronaut the laser gun, and the astronaut thanks them. The astronaut leaves the planet, feeling excited to have acquired such a powerful weapon. The astronaut worries that not taking the resources could result in the failure of the mission.
             </p>
                 : null}

                {level === 3 && choice === 0 ?
                <>
                <p className="info">
                The astronaut continues their journey through space, scanning for new resources. Suddenly, the ship's sensors pick up a new alien race nearby. The astronaut approaches the planet cautiously, not sure what to expect. As they land, they see a group of tall, humanoid creatures with scaly skin and glowing red eyes. These aliens introduce themselves as the Zetans.
                The astronaut establishes contact over the ship's communication system, trying to communicate with the Zetans. However, the Zetans respond in a hostile manner, making it clear that they do not wish to communicate. The astronaut realizes that the Zetans are not here to offer resources or assistance, but rather to attack.
                <br></br> <br></br>

                The astronaut is faced with a difficult decision. They could try to run and escape the planet, but the Zetans might pursue and the astronaut is not sure if the ship can outrun them. Alternatively, the astronaut could try to fight the Zetan warrior, but the warrior is heavily armed and the astronaut is not sure if they can defeat them.
                </p>
                </>
                : null}

                {level === 3 && choice === 1 ?
                <p className="info">
                    The astronaut decides to run from the Zetans. They quickly board their ship and take off, leaving the hostile planet behind. The Zetans pursue, firing their weapons at the ship. The astronaut dodges and weaves, trying to outrun the Zetans. The chase is intense, and the astronaut takes some damage to their ship, but they manage to escape.
                </p>
                : null}

                {level === 3 && choice === 2 && !battle ?
                <p className="info">
                    The astronaut decides to fight the Zetan warrior. The warrior is heavily armed, but the astronaut is determined to acquire resources for Earth. The battle is intense and the astronaut takes some damage, but they manage to defeat the warrior and acquire resources from the planet.
                </p>
                : null}

                {level === 3 && battle ?
                <>
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
                <p className="info">
                The astronaut's ship is almost back to Earth. The astronaut has been on a long and perilous journey, but they've finally found the resources that Earth needs so desperately. The astronaut is exhausted but also filled with a sense of accomplishment.
                <br></br> <br></br>
                As the astronaut's ship approaches Earth, they suddenly pick up a distress signal. The signal is coming from a nearby asteroid field. The astronaut decides to investigate, hoping to help whoever is in trouble. As the astronaut's ship enters the asteroid field, they are ambushed by a rogue alien. The alien is heavily armed and clearly hostile. 
                </p>
                </>
                : null}

                {level === 4 && choice === 1 && !battle ?
                <p className="info">
                    Battling the alien.
                </p>
                : null}

                {level === 4 && battle ?
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
                : null}

                {level === 4 && choice === 2 ?
                <p className="info">
                    The astronaut evades the aliens and escapes the asteroid field. The astronaut is relieved that they were able to escape, but they are also worried that they might have missed an opportunity to acquire more resources
                </p>
                : null}

                {level === 5 && choice === 0 ?
                <p className="info">
                    The astronaut defeats the alien and acquires resources from the asteroid field. The astronaut is relieved that they were able to acquire more resources.
                </p>
                : null}

                {level === 5 && choice === 1 ?
                <p className="info">
                    The astronaut's ship is almost back to Earth. The astronaut has been on a long and perilous journey, but they've finally found the resources that Earth needs so desperately. The astronaut is exhausted but also filled with a sense of accomplishment. He sees Earth in the distance and begins to approach to his home planet.
                </p>
                : null}

                {level === 5 && choice === 2 ?
                <p className="info">
                    The astronaut's ship lands on Earth. The astronaut is exhausted but also filled with a sense of accomplishment. Returning home with the resources is the most important thing to the astronaut, and they are happy to be back on Earth.
                </p>
                : null}
        </div>
    )
}

export default Info