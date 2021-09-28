import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import HomePage from '../components/HomePage';
import SignUpUser from '../components/users/SignUpUser';
// import UserLogin from '../components/users/UserLogin';
import LoginUserForm from '../components/users/LoginUser';
import ProfilePage from '../components/ProfilePage';

export function BLLContainer() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup">
          <SignUpUser />
        </Route>
        <Route exact path="/login">
          <LoginUserForm />
        </Route>
        <Route exact path="/:username" >
          <ProfilePage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
  
  
  
}

export default BLLContainer;
