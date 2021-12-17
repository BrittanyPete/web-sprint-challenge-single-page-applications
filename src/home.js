import React, { useEffect } from 'react';
import axios from 'axios';

export default function Home(props) {
    const { orders } = props;

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
            <h2>List of Orders</h2>
            <div>
                {orders.map((order, idx) => (
                    <div>
                       <h3>{order.name}</h3> 
                        <p>Order Number: {idx}</p>
                        <p>{order.size}</p>
                        <p>{order.toppings}</p>
                        <p>{order.specialInstructions}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}