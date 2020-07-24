import React from 'react'


export default function Home(props) {

    const { choice, olives, pineapples, cheese, peppers, instructions } = props.pizza

    return(
        <div>
            <h3>Order placed</h3>
            <p>Choice: {choice} </p>
            {olives && <p>Olives</p>}
            {pineapples && <p>Pineapples</p>}
            {cheese && <p>Cheese</p>}
            {peppers && <p>Peppers</p>}
            <h4>Special Instructions</h4>
            <p>{instructions}</p>
        </div>
    )
}