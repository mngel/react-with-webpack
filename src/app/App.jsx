import React from 'react';
import { Login } from './Login';

export class App extends React.Component {
  render () {
    return (
      <div>
        <Login headline='Login' user='Username' password='Password' />
        <br/>
        <Login headline='Anmelden' user='Benutzername' password='Passwort' />
        <br/>
        <Login headline='Anmelden' user='Email' password='Passwort (mind. 8 Zeichen)' />
      </div>
    );
  }
}
