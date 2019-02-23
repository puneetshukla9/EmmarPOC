import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, StatusBar, TouchableOpacity } from 'react-native';
import Logo from '../Home/Logo';
import loginService from "../Home/loginService";

class Home extends Component {
    constructor() {
        super();
        this.state = {};

        this.state.username = "";
        this.state.password = "";

        this.state.stringLen = {
            maxString: '',
            minString: ''
        }
        this.checkLogin = this.checkLogin.bind(this);
        this.parentRef = React.createRef();

    }

    componentWillMount() {
        this.setMinMaxLength();
    }
    setMinMaxLength(type, text) {
        if (type) {
            this.state[type] = text;
        }

        max = this.state.username;
        min = this.state.username;
        if (this.state.username && this.state.username.length < this.state.password.length) {
            max = this.state.password;
        }
        if (this.state.username && this.state.username.length > this.state.password.length) {
            min = this.state.password;
        }

        let temp = {};
        if (type) {
            temp[type] = text;
        }

        temp.stringLen = {};
        temp.stringLen.maxString = max;
        temp.stringLen.minString = min
        this.setState(temp);
    }

    checkLogin() {
        const { username, password } = this.state;
        loginService.login(username, password, function (response) {
            alert(response);
        });
    }

    render() {
        return (
            <View style={styles.container} ref={(ref) => this.parentRef = ref}>
                <StatusBar backgroundColor="#1c313a" barStyle="light-content" />

                <Logo logoText="Welcomee to My App" />

                <View style={styles.containerLogin}>
                    <TextInput value={this.state.username} style={styles.inputElem} placeholder='Username' underlineColorAndroid='transparent' onChangeText={(text) => { this.setMinMaxLength('username', text) }}></TextInput>
                    <TextInput value={this.state.password} style={styles.inputElem} placeholder='Password' underlineColorAndroid='transparent' secureTextEntry={true} onChangeText={(text) => { this.setMinMaxLength('password', text) }}></TextInput>
                    <TouchableOpacity style={styles.buttonElem} onPress={this.checkLogin}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.containerSignUp}>
                    <View style={styles.stringWrapper}>
                        <View style={styles.stringContainer}>
                            <Text style={{ color: '#fff', paddingHorizontal: 16 }}>Max String: {this.state.stringLen.maxString}</Text>
                            <Text style={{ color: '#fff', }}>Max String len: {this.state.stringLen.maxString.length}</Text>
                        </View>
                        <View style={styles.stringContainer}>
                            <Text style={{ color: '#fff' }}>Min String: {this.state.stringLen.minString}</Text>
                            <Text style={{ color: '#fff', paddingHorizontal: 16 }}>Min String len: {this.state.stringLen.minString.length}</Text>
                        </View>
                    </View>
                    <View style={styles.stringContainer}>
                        <Text>Don't have an account?</Text>
                        <Text style={{ color: '#acacac', paddingHorizontal: 16 }} onPress={() => this.props.navigation.navigate('SignUp')}>
                            Sign Up
                        </Text>
                    </View>
                    {/* </Text> */}
                </View>

            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#455a64',
        justifyContent: 'center',
        alignItems: 'center'

    },
    stringWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    stringContainer: {
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 10
    },
    containerLogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSignUp: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 16

    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        color: '#ffffff'
    },
    inputElem: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10,

    },
    buttonElem: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12

    },
    loginText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    }
});

export default Home