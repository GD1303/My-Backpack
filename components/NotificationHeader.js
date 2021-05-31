import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class NotificationHeader extends React.Component {
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
                            <Icon
                                name = 'sidebar'
                                type = 'feather'
                                color = '#89abe3ff'
                                onPress = {() => {
                                    this.props.navigation.toggleDrawer();
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