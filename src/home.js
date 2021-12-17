import React from 'react';


export default function Home(props) {
    const { details } = props;
    if (!details) {
        return <h3>Fetching orders</h3>
    }


    return (
        <div>

            <div>
                <h3>Name: {details.name}</h3> 
                <p>Size: {details.size}</p>
                {
                    !!details.toppings && !!details.toppings.length &&
                    <div>
                        Toppings:
                        <ul>
                            {details.toppings.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                }
                <p>Special Instructions: {details.instructions}</p>


            </div>
        </div>
    )
}