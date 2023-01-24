
interface Props {
    battle: boolean;
    setBattle: React.Dispatch<React.SetStateAction<boolean>>;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    level: number;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    health: number;
    setHealth: React.Dispatch<React.SetStateAction<number>>;
}

const Inventory: React.FC<Props> = ({ battle, visible, setVisible, level, health }) => {
    return(
       (!battle && health >= 0) ? 
       ( // Add this pair of parentheses
        <div className="inventory">
            {!visible && level === 1  ?
            <div className='button2' onClick={() => {setVisible(true)}}>Continue</div>
            : null}

            {!visible && level === 2  ?
            <div className='button2' onClick={() => {setVisible(true)}}>Continue</div>
            : null}     

            {!visible && level === 3  ?
            <div className='button2' onClick={() => {setVisible(true)}}>Continue</div>
            : null} 

            {!visible && level === 4  ?
            <div className='button2' onClick={() => {setVisible(true)}}>Continue</div>
            : null} 

            {!visible && level === 5  ?
            <div className='button2' onClick={() => {setVisible(true)}}>Continue</div>
            : null}           
        </div>
    ) : null 
    )
}

export default Inventory