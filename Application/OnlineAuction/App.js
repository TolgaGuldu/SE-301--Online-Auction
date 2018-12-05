/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, } from 'react-native';
import { AppRegistiry, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import HomeScreen from './View/HomeScreen'
import LoginScreen from './View/LoginScreen'
import RegisterScreen from './View/RegisterScreen'
import ProfileScreen from './View/ProfileScreen'



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Register : RegisterScreen,
    Profile : ProfileScreen
  },
  {
    initialRouteName: "Login"
  }
);
export default createAppContainer(RootStack);



