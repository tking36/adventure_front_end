import {useState} from 'react'

const User: any  = (props:any) => {
    return(
        <div className="user">
            <h1 className='user-title'>Taylor</h1>
            <img src="https://i.imgur.com/Um35ZtJ.png" alt="" className="user-image" />
            <img src="https://i.imgur.com/D9MyDCG.png" alt="" className="user-image-card" />
            <h2 className="user-health">Health: 100</h2>
            <h2 className="user-attack">Attack: 15</h2>
        </div>
    )
}

export default User