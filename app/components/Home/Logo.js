import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 70, height: 40 }} source={require('../../assets/logo.jpg')}></Image>
                <Text style={styles.logoText}>{this.props.logoText}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
       justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15

    },
    logoText: {
        fontSize: 18,
        color: 'rgba(255,255,255,0.7)'
    }

});