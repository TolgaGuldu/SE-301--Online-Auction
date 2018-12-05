import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { AppRegistiry, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class LoginScreen extends Component {

    static navigationOptions =
        {
            title: '                         Online Auction      ',
      
        };

    gotoNextActivity = () => {
        this.props.navigation.navigate('Home');
    }
    gotoNextActivity2 = () => {
        this.props.navigation.navigate('Register');
    }
    doNothing = () => {
        
    }

    render() {

        return (

            <View style={styles.MainContainer}>

                <Text style={styles.text}>Username: </Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Username"
                />
                <Text style={styles.text}>Password: </Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Password"
                />
                <Button onPress={this.gotoNextActivity} title='Login' />
                <Button onPress={this.gotoNextActivity2} title='Register' />
                <Button onPress={this.doNothing} title='Forgot Password' />


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