import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, StatusBar } from 'react-native';
import { AppRegistiry, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Form from './components/RegisterForm';

import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Database.db' });


export default class RegisterScreen extends Component {
	
    constructor(props) {
    super(props);
    this.state = {
      Username: '',
      Password: '',
      E-mail: '',
    };
	
	register_user = () => {
    var that = this;
    const { Username } = this.state;
    const { Password } = this.state;
    const { E-mail } = this.state;
    alert(Username, Password, E-mail);
    if (Username) {
      if (Password) {
        if (E-mail) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO table_user (Username, Password, E-mail) VALUES (?,?,?)',
              [Username, Password, E-mail],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are registered successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('HomeScreen'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Registration Failed');
                }
              }
            );
          });
        } else {
          alert('Please fill Address');
        }
      } else {
        alert('Please fill Contact Number');
      }
    } else {
      alert('Please fill Name');
    }
  };

    
    render() {

        return (

            <View style={styles.MainContainer}>

                <Form/>
               
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
        marginBottom: 10,
        padding: 10
    },

});