import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Icon } from 'react-native-elements';

import { DateSwitchNavigator } from './DateSwitchNavigator';
import SideBarMenu from './SideBarMenu';
import NotificationScreen from '../screens/NotificationScreen';
import InformationScreen from '../screens/InformationScreen';

export const DrawerNavigator = createDrawerNavigator({
    'Yearly Calendar': {
        screen: DateSwitchNavigator,
        navigationOptions: {
            drawerIcon: ({ size }) => (
                <Icon
                    name = 'date'
                    type = 'fontisto'
                    color = '#000000'
                    size = { size } />
            )
        },
    },
    'Notifications': {
        screen: NotificationScreen,
        navigationOptions: {
            drawerIcon: ({ size }) => (
                <Icon
                    name = 'bell'
                    type = 'fontisto'
                    color = '#000000'
                    size = { size } />
            )
        },
    },
    'Information': {
        screen: InformationScreen,
        navigationOptions: {
            drawerIcon: ({ size }) => (
                <Icon
                    name = 'question'
                    type = 'ant-design'
                    color = '#000000'
                    size = { size } />
            )
        },
    }
},
{
    contentComponent: SideBarMenu,
},
{
    initialRouteName: 'Yearly Calendar',
});