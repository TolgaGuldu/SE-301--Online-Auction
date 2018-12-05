import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput ,StatusBar} from 'react-native';
import { AppRegistiry, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class ProfileScreen extends Component {

    static navigationOptions =
        {
            title: '                        Profile       ',
      
        };

  
    render() {

        return (

            <View style={styles.MainContainer}>

                <Text style={styles.text}>This is going to be profile page </Text>
               
            </View>
        );
    }
}


const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5fcff',
        padding: 11

    },

    text:
    {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10
    },

});