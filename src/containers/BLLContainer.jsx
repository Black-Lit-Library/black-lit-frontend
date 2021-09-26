import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import HomePage from '../components/HomePage';
import SignUp from '../components/users/SignUp';
import UserLogin from '../components/users/UserLogin';

export function BLLContainer() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <UserLogin />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
  
  
  
}

export default BLLContainer;
