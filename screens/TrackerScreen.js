import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import db from '../Config';
import MonthlyHeader from '../components/MonthlyHeader';

export default class TrackerScreen extends React.Component {
    render() {
        return(
            <View style = {{ justifyContent: 'center', alignItems: 'center' }}>
                <MonthlyHeader navigation = { this.props.navigation } />
                <Text>
                    TRACKER SCREEN
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
});