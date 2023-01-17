

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
}

const Info: React.FC<Props> = ({ playerInventory, setPlayerInventory , level, setLevel, choice, setChoice, resources, setResources, health, setHealth }) => {

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
            <h1 className='info-title'>Status</h1>
                {level === 0 ?
                <p className="info"> 
                     As the Earth's resources dwindled, governments and corporations scrambled to find new sources of energy and materials. Desperate times called for desperate measures, and soon a lone astronaut was sent hurtling into the vast expanse of space, tasked with finding new resources to save humanity.
                 </p>
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

                {level === 1 && choice === 2 ?
                <p className="info">
                    The astronaut decides not to offer assistance to the alien species. The astronaut sneaks around the alien city, looking for resources. They find a room filled with valuable resources and begin to load them onto their ship. Suddenly, the alien guards arrive and the astronaut is forced to fight their way out.
                </p>
                    : null}

            

            
        </div>
    )
}

export default Info