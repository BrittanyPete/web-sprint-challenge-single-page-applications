import React, { useState, useEffect } from "react";
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import CreatePizza from './pizza_form';
import Home from './home';
import * as yup from 'yup';
import schema from './formSchema';
import axios from 'axios';


const initialFormValues = {
  name: '',
  size: '',
  instructions: '',
  cheese: false,
  pepperoni: false,
  ham: false,
  olives: false,
  sausage: false,
  tomatoes: false,
  chicken: false,
}
const initialFormErrors = {
  name: '',
  size: '',
  instructions: '',
}

const initialOrder = [];
const initialDisabled = true;


const App = () => {
  const [orders, setOrders] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled)



  useEffect(() => {
    const accessOrders = () => {
      axios.get(`https://reqres.in/api/orders`)
      .then(resp => setOrders(resp.data.data))
      .catch(err => {
        console.error('Error:', err);
      })
    }
  }, [])



const addNewOrder = newOrder => {
  axios.post('https://reqres.in/api/orders', newOrder)
  .then(resp => {
    setOrders([ resp.data, ...orders ])
  })
  .catch(err => console.log(err))
  .finally(() => setFormValues(initialFormValues))
}

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const changeValues = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value})
  }

  const submitOrder = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ['cheese', 'pepperoni', 'sausage', 'ham', 'olives', 'tomatoes', 'chicken', 'extraCheese'].filter(topping => !!formValues[topping]),
      instructions: formValues.instructions,
    }
    addNewOrder(newOrder);
  }


  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza' id='order-pizza'>Create Your Pizza</Link>
      </nav>
      <h1>Lambda Eats</h1>
      
    <Switch>
      <Route exact path='/pizza'>
        <CreatePizza 
          values={formValues}
          change={changeValues}
          submit={submitOrder} 
          disabled={disabled}
          errors={formErrors}
          />
      </Route>
      <Route exact path='/'>
      <h2>List of Orders</h2>
          {orders.map((order) => {
            return (
              <Home key={order.id} details={order} />
            )
          })}
      </Route>
    </Switch>

    </>
  );
};
export default App;
