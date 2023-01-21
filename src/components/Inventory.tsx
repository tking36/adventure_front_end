import {useState} from 'react'

interface Props {
    playerInventory: [number, string][];
    setPlayerInventory: React.Dispatch<React.SetStateAction<[number, string][]>>;
    resources: number;
    setResources: React.Dispatch<React.SetStateAction<number>>
    bank: number;
    setBank: React.Dispatch<React.SetStateAction<number>>;
    battle: boolean;
    setBattle: React.Dispatch<React.SetStateAction<boolean>>;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    level: number;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    choice: number;
    setChoice: React.Dispatch<React.SetStateAction<number>>;
}

const Inventory: React.FC<Props> = ({ playerInventory, setPlayerInventory , resources, setResources, bank, setBank, battle, visible, setVisible, level, choice }) => {
    return(
       (!battle) ? 
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