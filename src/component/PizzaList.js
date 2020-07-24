import React from 'react'
import Pizza from './Pizza'

export default function PizzaList(props) {

    return(
        <div>
            <h3>Orders</h3>
            {props.pizza.map(pizza => 
                
                <Pizza pizza={pizza} key={pizza.id}/>)}
        </div>
    )
}