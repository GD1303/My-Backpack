import React from 'react';
import { View, Text, Modal, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import firebase from 'firebase';

import db from '../Config';

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            emailId: '',
            password: '',
            confirmPassword: '',
            date: '',
            isVisible: false,
        };
    }

    userLogin = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            return alert(errorMessage);
        });
    }

    userSignUp = (email, password, confirmPassword) => {
        if(this.state.firstName === '' || this.state.lastName === '' || this.state.emailId === '') {
            return alert('Incomplete fields.');
        } else if(password === '') {
            return alert('Please enter a password.');
        } else if(password !== confirmPassword) {
            return alert('Password does not match.');
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                db.collection('users').add({
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    email: this.state.emailId,
                    date: this.state.date,
                });

                return alert(
                    'User Added Successfully.',
                    '',
                    [{
                        text: 'OK',
                        onPress: () => {
                            this.setState({
                                isVisible: false
                            });
                        }
                    }]
                )
            })
            .catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
    
                return alert(errorMessage);
            });
        }
    }

    showCurrentDate = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        if(month === 1 || month === 2 || month === 3 || month === 4 || month === 5 || month === 6 || month === 7 || month === 8 || month === 9) {
            this.setState({
                date: date + '-0' + month + '-' + year,
                year: year,
            });
        } else if (date === 1 || date === 2 || date === 3 || date === 4 || date === 5 || date === 6 || date === 7 || date === 8 || date === 9) {
            this.setState({
                date: '0' + date + '-' + month + '-' + year,
                year: year,
            });
        } else if(month === 1 || month === 2 || month === 3 || month === 4 || month === 5 || month === 6 || month === 7 || month === 8 || month === 9 && date === 1 || date === 2 || date === 3 || date === 4 || date === 5 || date === 6 || date === 7 || date === 8 || date === 9) {
            this.setState({
                date: '0' + date + '-0' + month + '-' + year,
                year: year,
            });
        } else {
            this.setState({
                date: date + '-' + month + '-' + year,
                year: year,
            });
        }
    }

    showModal = () => (
        <View style = { styles.modalContainer }>
            <ScrollView style = { styles.scrollView }>
                <KeyboardAvoidingView style = { styles.keyboardAvoidingView }>
                    <Text style = { styles.modalHeader }>
                        SIGN UP
                    </Text>
                    <TextInput
                        style = { styles.modalTextInput }
                        placeholder = 'First Name'
                        onChangeText = {(text) => {
                            this.setState({
                                firstName: text
                            });
                        }} />
                    <TextInput
                        style = { styles.modalTextInput }
                        placeholder = 'Last Name'
                        onChangeText = {(text) => {
                            this.setState({
                                lastName: text
                            });
                        }} />
                    <TextInput
                        style = { styles.modalTextInput }
                        placeholder = 'Email Address'
                        keyboardType = 'email-address'
                        onChangeText = {(text) => {
                            this.setState({
                                emailId: text
                            });
                        }} />
                    <TextInput
                        style = { styles.modalTextInput }
                        placeholder = 'Password'
                        onChangeText = {(text) => {
                            this.setState({
                                password: text
                            });
                        }}
                        secureTextEntry />
                    <TextInput
                        style = { styles.modalTextInput }
                        placeholder = 'Confirm Password'
                        onChangeText = {(text) => {
                            this.setState({
                                confirmPassword: text
                            });
                        }}
                        secureTextEntry />
                    <View style = { styles.buttonContainer }>
                        <TouchableOpacity
                            style = { styles.signUpButton }
                            onPress = {() => {
                                this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword);
                                this.showCurrentDate();
                            }}>
                            <Text style = { styles.signUpButtonText }>
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = { styles.cancelButton }
                            onPress = {() => {
                                this.setState({
                                    isVisible: false
                                });
                            }}>
                            <Text style = { styles.cancelButtonText }>
                                CANCEL
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )

    render() {
        if(this.state.isVisible === true) {
            return(
                <View style = { styles.container }>
                    <View style =  { styles.modalBox }>
                        {
                            this.showModal()
                        }
                    </View>
                </View>
            )
        } else {
            return(
                <View style = { styles.container }>
                    <View style = { styles.headerContainer }>
                        <Image
                            style = { styles.image }
                            source = { require('../assets/backpack.png') } />
                        <Text style = { styles.title }>
                            MY BACKPACK
                        </Text>
                        <Text style = { styles.subtitle }>
                            Every Student's Necessity
                        </Text>
                    </View>
                    <View style = { styles.loginContainer }>
                        <View style = {{ flexDirection: 'row', flex: 1 }}>
                            <Icon
                                style = {{ marginTop: -2 }}
                                name = 'envelope'
                                type = 'font-awesome'
                                color = '#ffff' />
                            <Text style = {[ styles.tinyHeader, { paddingLeft: 10 } ]}>
                                EMAIL ADDRESS
                            </Text>
                        </View>
                        <TextInput
                            style = { styles.loginTextInput }
                            keyboardType = 'email-address'
                            onChangeText = {(text) => {
                                this.setState({
                                    emailId: text
                                });
                            }} />
                    </View>
                    <View style = { styles.loginContainer }>
                        <View style = {{ flexDirection: 'row', flex: 1 }}>
                            <Icon
                                style = {{ marginTop: -2 }}
                                name = 'lock'
                                type = 'font-awesome'
                                color = '#ffff' />
                            <Text style = {[ styles.tinyHeader, { paddingLeft: 10 } ]}>
                                PASSWORD
                            </Text>
                        </View>
                        <TextInput
                            style = { styles.loginTextInput }
                            onChangeText = {(text) => {
                                this.setState({
                                    password: text
                                });
                            }}
                            secureTextEntry />
                    </View>
                    <View style = { styles.buttonContainer }>
                        <TouchableOpacity
                            style = { styles.button }
                            onPress = {() => {
                                this.userLogin(this.state.emailId, this.state.password);
                                this.props.navigation.navigate('Yearly Calendar');
                            }}>
                            <Text style = { styles.buttonText }>
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style = {[ styles.button, { marginTop: 10 } ]}
                            onPress = {() => {
                                this.setState({
                                    isVisible: true
                                });
                            }}>
                            <Text style = { styles.buttonText }>
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        };
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#89abe3ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        marginTop: 25,
    },
    title: {
        fontSize: 60,
        fontWeight: 300,
        fontFamily: 'AvenirNext-Heavy',
        color: '#ffff',
    },
    subtitle: {
        color : '#fcd6f5ff'
    },
    loginContainer: {
        marginTop: 7,
    },
    tinyHeader: {
        color: '#ffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginTextInput: {
        width: 300,
        height: 35,
        borderBottomWidth: 1.5,
        borderColor: '#fcd6f5ff',
        fontSize: 20,
        marginBottom: 20,
        marginTop: 5,
        color: '#fcd6f5ff',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        backgroundColor: '#ffffff',
        elevation: 10,
    },
    buttonText: {
        color: '#89abe3ff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalBox: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#89abe3ff',
        flex: 1,
    },
    modalContainer: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        margin: 20,
    },
    scrollView: {
        width: '100%',
    },
    modalHeader: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        color: '#89abe3ff',
        margin: 50,
        fontWeight: 500,
    },
    modalTextInput: {
        width: '75%',
        height: 35,
        alignSelf: 'center',
        borderColor: '#89abe3ff',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
    },
    signUpButton: {
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: '#89abe3ff'
    },
    signUpButtonText: {
        color: '#ffff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    cancelButton: {
        width: 200,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    cancelButtonText: {
        color:'#89abe3ff',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
});

/*
    createLogin = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        
        if(month === 1 || month === 2 || month === 3 || month === 4 || month === 5 || month === 6 || month === 7 || month === 8 || month === 9) {
            this.setState({
                date: date,
                year: year,
                month: '0' + month,
            });
            db.collection('logins').add({
                month: '0' + month,
                date: date,
                year: year,
                email: this.state.emailId,
                wholeDate: date + '-0' + month + '-' + year,
            });
        } else if (date === 1 || date === 2 || date === 3 || date === 4 || date === 5 || date === 6 || date === 7 || date === 8 || date === 9) {
            this.setState({
                date: '0' + date,
                year: year,
                month: month,
            });
            db.collection('logins').add({
                month: month,
                date: '0' + date,
                year: year,
                email: this.state.emailId,
                wholeDate: '0' + date + '-' + month + '-' + year,
            });
        } else if(month === 1 || month === 2 || month === 3 || month === 4 || month === 5 || month === 6 || month === 7 || month === 8 || month === 9 && date === 1 || date === 2 || date === 3 || date === 4 || date === 5 || date === 6 || date === 7 || date === 8 || date === 9) {
            this.setState({
                date: '0' + date,
                year: year,
                month: '0' + month,
            });
            db.collection('logins').add({
                month: '0' + month,
                date: '0' + date,
                year: year,
                email: this.state.emailId,
                wholeDate: '0' + date + '-0' + month + '-' + year,
            });
        } else {
            this.setState({
                date: date,
                year: year,
                month: month,
            });
            db.collection('logins').add({
                month: month,
                date: date,
                year: year,
                email: this.state.emailId,
                wholeDate: date + '-' + month + '-' + year,
            });
        }
    }
*/