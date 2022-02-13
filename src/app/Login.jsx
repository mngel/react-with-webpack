import React from 'react';
import { Headline } from './core-components/Headline';
import { Input } from './core-components/Input';
import { Password } from './core-components/Password';

export class Login extends React.Component {
  render () {
    return (
      <div>
        <Headline content={ this.props.headline } />
        <Input content={ this.props.user } id='username' />
        <Password content={ this.props.password } id='password' />
      </div>
    );
  }
}
