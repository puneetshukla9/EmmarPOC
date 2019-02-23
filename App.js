/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './app/components/Home';
import SignUp from './app/components/SignUp';




const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  SignUp:{
    screen: SignUp
  }
});

export default createAppContainer(RootStack);

