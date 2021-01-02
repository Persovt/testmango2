import {React, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

export const CreatePage = () => {
    const auth = useContext(AuthContext)

    return(
        <div className="">
            <button onClick={() => auth.logout()}>logout</button>
        </div>
    )
}