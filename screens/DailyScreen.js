import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import db from '../Config';
import MonthlyHeader from '../components/MonthlyHeader';

export default class DailyScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            date: '',
        }
    }

    getCurrentDate = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        if(month === 1 || month === 2 || month === 3 || month === 4 || month === 5 || month === 6 || month === 7 || month === 8 || month === 9) {
            this.setState({
                date: date + '-0' + month + '-' + year,
            });
        } else if (date === 1 || date === 2 || date === 3 || date === 4 || date === 5 || date === 6 || date === 7 || date === 8 || date === 9) {
            this.setState({
                date: '0' + date + '-' + month + '-' + year,
            });
        } else if(month === 1 || month === 2 || month === 3 || month === 4 || month === 5 || month === 6 || month === 7 || month === 8 || month === 9 && date === 1 || date === 2 || date === 3 || date === 4 || date === 5 || date === 6 || date === 7 || date === 8 || date === 9) {
            this.setState({
                date: '0' + date + '-0' + month + '-' + year,
            });
        } else {
            this.setState({
                date: date + '-' + month + '-' + year,
            });
        };
    }

    componentDidMount() {
        this.getCurrentDate();
    }

    render() {
        return(
            <View style = {{ justifyContent: 'center', alignItems: 'center' }}>
                <MonthlyHeader navigation = { this.props.navigation } />
                <Text style = { styles.date }>
                    {this.state.date}
                </Text>
                <Text>
                    (BOX WITH TIME)
                </Text>
                <Text>
                    (EVENTS)
                </Text>
                <Text>
                    (EXTRA NOTES)
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    date: {
        fontSize: 50,
        fontWeight: 300,
        color: '#89abe3ff',
        fontFamily: 'GillSans-UltraBold',
    },
});