import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import db from '../Config';
import MonthlyHeader from '../components/MonthlyHeader';

export default class MonthlyCalendar extends React.Component {
    constructor() {
        super();
        this.state = {
            displayMonth: '',
            year: '',
        };
    }

    getCurrentDate = () => {
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        const monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
        console.log(monthNames[month - 1]);

        this.setState({
            year: year,
            displayMonth: monthNames[month - 1],
        });
    }

    componentDidMount() {
        this.getCurrentDate();
    }

    render() {
        return(
            <View style = {{ justifyContent: 'center', alignItems: 'center' }}>
                <MonthlyHeader navigation = { this.props.navigation } />
                <Text style = { styles.month }>
                    {this.state.displayMonth}
                </Text>
                <Text style = { styles.year }>
                    {this.state.year}
                </Text>
                <Text>
                    (CALENDAR)
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    month: {
        fontSize: 50,
        fontWeight: 300,
        color: '#89abe3ff',
        fontFamily: 'GillSans-UltraBold',
    },
    year: {
        fontSize: 30,
        fontWeight: 300,
        color: '#89abe3ff',
        fontFamily: 'GillSans-UltraBold',
        textAlign: 'right',
        alignSelf: 'stretch',
    },
});