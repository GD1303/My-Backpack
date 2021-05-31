import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen';
import { DrawerNavigator } from './DrawerNavigator';

export const LoginSwitchNavigator = createSwitchNavigator({
    Login: {
        screen: LoginScreen,
    },
    Yearly: {
        screen: DrawerNavigator,
    },
});