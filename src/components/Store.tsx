

interface Props {
    adventure: Adventure[];
    setAdventure: React.Dispatch<React.SetStateAction<Adventure[]>>;
    setPage: React.Dispatch<React.SetStateAction<boolean>>
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

const Store: React.FC<Props> = ({ setPage, adventure }) => {

    const showPage = () => {
        setPage(true)
        console.log(setPage);
    }

    return(
        <div className="store">
            <h1>Store</h1>
            <h1>{adventure[0].health}</h1>
            <button onClick={() => showPage()}> Go To Story</button>
        </div>
    )
}

export default Store