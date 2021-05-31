import React from 'react';
import { createAppContainer } from 'react-navigation';

import { LoginSwitchNavigator } from './components/LoginSwitchNavigator'

export default class App extends React.Component {
  render() {
    return(
      <AppContainer />
    );
  }
}

const AppContainer = createAppContainer(LoginSwitchNavigator);