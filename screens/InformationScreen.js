import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import db from '../Config';
import YearlyHeader from '../components/YearlyHeader';

export default class InformationScreen extends React.Component {
    render() {
        return(
            <View style = {{ justifyContent: 'center', alignItems: 'center' }}>
                <YearlyHeader navigation = { this.props.navigation } />
                <Text>
                    INFORMATION SCREEN
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
});