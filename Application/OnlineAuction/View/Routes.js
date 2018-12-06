import React, { Component } from 'react';
import {Router , Stack , Scene} from 'react-native-router-flux';



import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ProfileScreen from './ProfileScreen';

export default class Routes extends Component{

    render(){
        return(
            <Router>
                <Stack key = 'root' hideNavBar = {true}>
                    <Scene key = 'Login' component = {LoginScreen} initial={true} title="Login"/>
                    <Scene key = 'Register' component = {RegisterScreen} title="Register" initial={false}/>
                    <Scene key = 'Home' component = {HomeScreen} title="Home" initial={false}/>
                    <Scene key = 'Profile' component = {ProfileScreen} title="Profile" initial={false}/>
                </Stack>
            </Router>
        )
    }
}