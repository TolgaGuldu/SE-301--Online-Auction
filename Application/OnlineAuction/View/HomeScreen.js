import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput,StatusBar } from 'react-native';
import { AppRegistiry, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends Component {

  

  gotoNextActivity = () => {
    this.props.navigation.navigate('Profile');
}

  render() {
    let pic = {
      uri: 'http://borculochrschool.org/wp-content/uploads/2016/09/Auction-500x291.jpg'
    };
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Text style={styles.welcome}>Welcome to Online Auction</Text>
        <Text style={styles.instructions}>This is an early stage our the application</Text>
        <Button onPress={this.gotoNextActivity} title='Profile Page' />

      </View>
    );
  }
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  text:
  {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});