import {useState} from 'react'

interface Props {
    setPage: React.Dispatch<React.SetStateAction<boolean>>
}

const Story: React.FC<Props> = ({ setPage }) => {
    
    const showPage = () => {
        setPage(false)
        console.log(setPage);
    }

    return(
        <div className="store">
            <h1>Story</h1>
            <button onClick={() => showPage()}> Go To Store</button>
        </div>
    )
}

export default Story
