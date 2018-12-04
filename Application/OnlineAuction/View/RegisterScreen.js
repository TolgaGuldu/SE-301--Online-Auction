import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { AppRegistiry, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class RegisterScreen extends Component {

    
    gotoNextActivity = () => {
        this.props.navigation.navigate('Login');
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
                 <Text style={styles.text}>Password check: </Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="enter same password"
                />
                <Text style={styles.text}> </Text>
                <Button onPress={this.gotoNextActivity} title='Finish' />
               


            </View>
        );
    }
}


const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5fcff',
        padding: 15,

    },

    text:
    {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
        padding: 10
    },

});