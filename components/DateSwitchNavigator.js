import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import YearlyScreen from '../screens/YearlyScreen';
import DailyScreen from '../screens/DailyScreen';
import { TabNavigator } from './TabNavigator';

export const DateSwitchNavigator = createSwitchNavigator({
    Year: {
        screen: YearlyScreen,
    },
    Month: {
        screen: TabNavigator,
    },
});