import React, { useEffect } from 'react';
import axios from 'axios';

export default function Home(props) {
    const { details } = props;
    if (!details) {
        return <h3>Fetching orders</h3>
    }

    // useEffect(() => {
    //     const accessOrders = () => {
    //       axios.get(`https://reqres.in/api/orders`)
    //       .then(resp => console.log(resp.data.data))
    //       .catch(err => {
    //         console.error('Error:', err);
    //       })
    //     }
    //     accessOrders();
    //   }, [])

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
                <p>Special Instructions: {details.specialInstructions}</p>


            </div>
        </div>
    )
}