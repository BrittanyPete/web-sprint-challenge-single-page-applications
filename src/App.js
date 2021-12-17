import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import CreatePizza from './pizza_form';
import Home from './home';

const App = () => {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pizza' id='order-pizza'>Create Your Pizza</Link>
      </nav>
      <h1>Lambda Eats</h1>
      
    <Switch>
      <Route path='/pizza'>
        <CreatePizza />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>

    </>
  );
};
export default App;
