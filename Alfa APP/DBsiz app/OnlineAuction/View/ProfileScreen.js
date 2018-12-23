import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput ,StatusBar} from 'react-native';
import { AppRegistiry, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import Form from './components/RegisterForm'


export default class ProfileScreen extends Component {

    render() {

        return (

            <View style={styles.MainContainer}>

                <Text style = {styles.text}>
                    This is going to be profile page
                </Text>
               
            </View>
        );
    }
}


const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7986cb',
        padding: 11,
        alignItems : 'center'

    },
    text:{
        fontSize : 27,
        alignItems : 'center'
    }
   

});