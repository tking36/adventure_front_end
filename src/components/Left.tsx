import {useState} from 'react'
import User from './User'
import Inventory from './Inventory'
import Info from './Info'

const Left: any  = (props:any) => {
    return(
        <div className="left">
            <User/>
            <Info/>
            <Inventory/>
        </div>
    )
}

export default Left
