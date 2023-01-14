import { useState, Dispatch, SetStateAction } from 'react'

interface Props {

    setPage: React.Dispatch<React.SetStateAction<boolean>>
}

const Store: React.FC<Props> = ({ setPage }) => {

    const showPage = () => {
        setPage(true)
        console.log(setPage);
    }

    return(
        <div className="store">
            <h1>Store</h1>
            <button onClick={() => showPage()}> Go To Story</button>
        </div>
    )
}

export default Store