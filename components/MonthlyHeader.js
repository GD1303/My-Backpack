import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import firebase from 'firebase';

import db from '../Config';

export default class MonthlyHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: firebase.auth().currentUser.email,
            value: '',
        }
    }
/*
    getNumberOfUnreadNotifications = () => {
        db.collection('notifications').where('notification_status', '==', 'unread').where('targeted_user_id', '==', this.state.userId)
        .onSnapshot(snapshot => {
            var unreadNotifications = snapshot.docs.map(doc => {
                doc.data();
            });
            this.setState({
                value: unreadNotifications.length
            });
        });
    }

    BellIconWithBadge = () => {
        return(
            <View>
                <Icon
                    name = 'bell'
                    type = 'font-awesome'
                    color = '#696969'
                    size = { 25 }
                    onPress = {() => {
                        this.props.navigation.navigate('Notifications');
                    }} />
                <Badge
                    value = { this.state.value }
                    containerStyle = {{
                        position: 'absolute',
                        top: -4,
                        right: -4,
                    }} />
            </View>
        )
    }

    componentDidMount() {
        this.getNumberOfUnreadNotifications();
    }
*/

    render() {
        return(
            <SafeAreaProvider>
                <View style = { styles.textContainer }>
                    <Text style = { styles.title }>
                        MY BACKPACK
                    </Text>
                </View>
                <View>
                    <Header
                        leftComponent = {
                            <View style = {{ flexDirection: 'row' }}>
                                <Icon
                                    name = 'arrowleft'
                                    type = 'ant-design'
                                    color = '#89abe3ff'
                                    onPress = {() => {
                                        this.props.navigation.navigate('Year');
                                    }} />
                                    <Icon
                                        name = 'sidebar'
                                        type = 'feather'
                                        color = '#89abe3ff'
                                        style = {{ paddingLeft: 10 }}
                                        onPress = {() => {
                                            this.props.navigation.toggleDrawer();
                                        }} />
                            </View>
                        }
                        rightComponent = {
                            <Icon
                                name = 'notification'
                                type = 'ant-design'
                                color = '#89abe3ff'
                                size = { 25 }
                                onPress = {() => {
                                    this.props.navigation.navigate('Notifications');
                                }} />
                        }
                        backgroundColor = '#ffff' />
                </View>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: '#ffff',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 60,
        fontWeight: 300,
        fontFamily: 'AvenirNext-Heavy',
        color: '#89abe3ff',
    },
});