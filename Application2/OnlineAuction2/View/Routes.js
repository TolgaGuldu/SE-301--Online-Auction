import React, { Component } from 'react';
import {Router , Stack , Scene} from 'react-native-router-flux';



import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import ProfileScreen from './ProfileScreen';
import RegisteredProductScreen from './RegisteredProductScreen';
import VisitorProductScreen from './VisitorProductScreen';

export default class Routes extends Component{

    render(){
        return(
            <Router>
                <Stack key = 'root' hideNavBar = {true}>
                    <Scene key = 'Login' component = {LoginScreen} initial={false} title="Login"/>
                    <Scene key = 'Register' component = {RegisterScreen} title="Register" initial={false}/>
                    <Scene key = 'Home' component = {HomeScreen} title="Home" initial={false}/>
                    <Scene key = 'Profile' component = {ProfileScreen}  initial={false} hideNavBar = {false} navTransparent = {true}/>
                    <Scene key = 'RegisteredProduct' component = {RegisteredProductScreen} initial={true} title="RegisteredProduct" />
                    <Scene key = 'VisitorProduct' component = {VisitorProductScreen} initial={false} title="VisitorProduct"/>
                </Stack>
            </Router>
        )
    }
}