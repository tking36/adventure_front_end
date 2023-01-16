
import Story from './Story'
import Store from './Store'

interface Props {
    adventure: Adventure[];
    setAdventure: React.Dispatch<React.SetStateAction<Adventure[]>>;
    setPage: React.Dispatch<React.SetStateAction<boolean>>
    page: boolean
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

const Middle: React.FC<Props> = ({ setPage, page, adventure, setAdventure }) => {
    const Stars = require('./video/Stars.mp4')

return(
    <div className="middle">
        <video className='stars-video' autoPlay loop muted>
                <source src={Stars} type='video/mp4'/>
        </video>
        { page ?  <Story page={page} adventure={adventure} setAdventure={setAdventure} setPage={setPage}/> : <Store adventure={adventure} setAdventure={setAdventure} setPage={setPage}/>} 
    </div>
)
}

export default Middle
