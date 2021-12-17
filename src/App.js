import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import CreatePizza from './pizza_form';
import Home from './home';


const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  cheese: false,
  pepperoni: false,
  ham: false,
  olives: false,
  sausage: false,
  tomatoes: false,
  chicken: false,
  extraCheese: false,
  specialInstructions: '',
}

const initialOrder = [];


const App = () => {
  const [order, setOrder] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues);


  const changeValues = (name, value) => {
    setFormValues({ ...formValues, [name]: value})
  }

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
          />
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>

    </>
  );
};
export default App;
