import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MonthlyCalendar from '../screens/MonthlyCalendar';
import DailyScreen from '../screens/DailyScreen';
import TrackerScreen from '../screens/TrackerScreen';
import CalendarScreen from '../screens/CalendarScree';

export const TabNavigator = createBottomTabNavigator({
    'Tracker': {
        screen: TrackerScreen,
        navigationOptions: {
            tabBarIcon:
                <Icon
                    name = 'clockcircleo'
                    type = 'ant-design'
                    color = '#89abe3ff' />,
        },
    },
    'Log': {
        screen: MonthlyCalendar,
        navigationOptions: {
            tabBarIcon: 
                <Icon
                    name = 'hourglass'
                    type = 'ant-design'
                    color = '#89abe3ff' />,
        },
    },
    'Daily': {
        screen: DailyScreen,
        navigationOptions: {
            tabBarIcon:
                <Icon
                    name = 'profile'
                    type = 'ant-design'
                    color = '#89abe3ff' />,
        },
    },
    'Calendar': {
        screen: CalendarScreen,
        navigationOptions: {
            tabBarIcon:
                <Icon
                    name = 'calendar'
                    type = 'ant-design'
                    color = '#89abe3ff' />,
        },
    },
},
{
    initialRouteName: 'Log',
});