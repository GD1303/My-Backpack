import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import db from '../Config';
import NotificationHeader from '../components/NotificationHeader';

export default class NotificationScreen extends React.Component {
    render() {
        return(
            <View style = {{ justifyContent: 'center', alignItems: 'center' }}>
                <NotificationHeader navigation = { this.props.navigation } />
                <Text>
                    NOTIFICATION SCREEN
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
});