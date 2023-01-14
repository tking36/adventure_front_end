import {useState} from 'react'
import Story from './Story'
import Store from './Store'


interface Props {
    setPage: React.Dispatch<React.SetStateAction<boolean>>
    page: boolean
}

const Middle: React.FC<Props> = ({ setPage, page }) => {

return(
    <div className="middle">
        
        { page ?  <Story setPage={setPage}/> : <Store setPage={setPage}/>} 
    </div>
)
}

export default Middle
