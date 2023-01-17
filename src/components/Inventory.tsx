import {useState} from 'react'

interface Props {
    playerInventory: [number, string][];
    setPlayerInventory: React.Dispatch<React.SetStateAction<[number, string][]>>;
    resources: number;
    setResources: React.Dispatch<React.SetStateAction<number>>
    bank: number;
    setBank: React.Dispatch<React.SetStateAction<number>>;
}

const Inventory: React.FC<Props> = ({ playerInventory, setPlayerInventory , resources, setResources, bank, setBank }) => {
    return(
        <div className="inventory">
            <div className="inv-container">
                <h1 className='inv'>Bank:{bank}</h1>
                <h1 className='inv'>Resources:{resources}</h1>
            </div>
            <div className="inv-container">
                <h1 className='inv'>I</h1>
                <h1 className='inv'>I</h1>
            </div>
        </div>
    )
}

export default Inventory