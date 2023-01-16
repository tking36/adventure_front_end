

interface Props {
    adventure: Adventure[];
    setAdventure: React.Dispatch<React.SetStateAction<Adventure[]>>;
    setPage: React.Dispatch<React.SetStateAction<boolean>>
    page: boolean;
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

const Story: React.FC<Props> = ({ setPage, page, adventure  }) => {

    const Cockpit = require('./images/cockpit.png')

    
   

    return(
        <div className="story">
            <img className='cockpit-png' src={Cockpit} alt=""/>
            {/* <button onClick={() => showPage()}> Go To Store</button> */}
        </div>
    )
}

export default Story
