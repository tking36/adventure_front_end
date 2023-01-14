import {useState} from 'react'

interface Props {
    setPage: React.Dispatch<React.SetStateAction<boolean>>
}

const Story: React.FC<Props> = ({ setPage }) => {

    const Cockpit = require('./images/cockpit.png')
    
    const showPage = () => {
        setPage(false)
        console.log(setPage);
    }

    return(
        <div className="store">
            <img src={Cockpit} alt="" />
            <button onClick={() => showPage()}> Go To Store</button>
        </div>
    )
}

export default Story
