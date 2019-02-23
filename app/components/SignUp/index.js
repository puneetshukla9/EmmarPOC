import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../Home/Logo';

class SignUp extends Component {
    constructor() {
        super();
        state = {
            fullName: '',
            email: '',
            password: '',
        }
    }

    onSignUpClick() {
        let stringLength = {
            max: '',
            min: ''
        }
        for (let string in this.state) {
            if (!stringLength.min && this.state[string]) {
                stringLength.min = this.state[string];
            }
            if (!stringLength.max && this.state[string]) {
                stringLength.max = this.state[string];
            }
            if (this.state[string] && stringLength.max.length < this.state[string].length) {
                stringLength.max = this.state[string];
            }
            if (this.state[string] && stringLength.min.length > this.state[string].length) {
                stringLength.min = this.state[string];
            }
        }
        alert("Max String: " + stringLength.max + "\n" + "Max Length: " + stringLength.max.length + "\n" + "Min String: " + stringLength.min + "\n" + "Min Length: " + stringLength.min.length)
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <View style={styles.container}>
                <Logo logoText="Welcome to SignUp Form" />
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Full name"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(fullName) => this.setState({ fullName })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({ email })} />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({ password })} />
                </View>


                <TouchableOpacity style={[styles.buttonContainer, styles.buttonElem]} onPress={() => this.onSignUpClick()}>
                    <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>
                <View style={styles.container}></View>
            </View>


        );

    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 2,
        backgroundColor: '#455a64',
        justifyContent: 'center',
        alignItems: 'center'

    },
    inputContainer: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 30,
        width: 300,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        color: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 300,
        borderRadius: 30,

    },
    buttonElem: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12

    },
    signUpText: {
        width: 300,
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    }

});

export default SignUp
