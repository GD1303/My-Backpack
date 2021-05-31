import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from 'firebase';

import db from '../Config';
import YearlyHeader from '../components/YearlyHeader';

export default class YearlyScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            year: '',
        }
    }

    getCurrentYear = () => {
        var year = new Date().getFullYear();

        this.setState({
            year: year,
        });
    }

    componentDidMount() {
        this.getCurrentYear();
    }

    render() {
        return(
            <View style = {{ justifyContent: 'center', alignItems: 'center' }}>
                <YearlyHeader navigation = { this.props.navigation } />
                <Text style = { styles.year }>
                    {this.state.year}
                </Text>
                <TouchableOpacity 
                    onPress = {() => {
                        this.props.navigation.navigate('Month');
                    }}>
                    <Text>
                        (MONTHS - calender view) [like 'at a glance']
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    year: {
        fontSize: 100,
        fontWeight: 300,
        color: '#89abe3ff',
        fontFamily: 'GillSans-UltraBold',
    },
});