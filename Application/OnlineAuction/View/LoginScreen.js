import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput ,StatusBar} from 'react-native';
import { AppRegistiry, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';




export default class LoginScreen extends Component {

 
    gotoNextActivity = () => {
        this.props.navigation.navigate('Home');
    }
    gotoNextActivity2 = () => {
        this.props.navigation.navigate('Register');
    }
    message = () => {
        alert('Not usable at the moment')
    }

    render() {

        return (

            <View style={styles.MainContainer}>
                <StatusBar
                    backgroundColor = '#49599a'
                    barStyle = 'light-content'
                />
               
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
                <Button onPress={this.message} title='Forgot Password' />


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

    text:
    {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10
    },

});