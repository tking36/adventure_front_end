
import Choices from './Choices'

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

  const Bottom: React.FC<Props> = ({ setPage, page, adventure  }) => {

    const showPage = () => {
        setPage(false)
        console.log(setPage);
    }


    return(
        <div className="bottom">
            <Choices/>
            <h1>{adventure[0].health}</h1>
            <button onClick={() => showPage()}> Go To Store</button>
        </div>
    )
}



  export default Bottom
  