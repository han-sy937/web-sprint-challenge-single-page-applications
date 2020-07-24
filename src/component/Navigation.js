import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Navigation(){
    const history = useHistory()

    return(
        <div>
            <h1>Lambda Eats</h1>
            <button onClick={() => history.push("/")}>Home</button>
            <button onClick={() => history.push("/form")}>Order Pizza</button>
        </div>
    )
}