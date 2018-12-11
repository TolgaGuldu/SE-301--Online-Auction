import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { AppRegistiry, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from './components/Logo';
import ProductIcon from './components/ProductIcon';

export default class RegisteredProductScreen extends Component{

gotoNextActivity=()=> {
}

    render(){

        return(

        <View style={styles.MainContainer}>

            <View style={styles.secondPart}>
            <Logo />
            </View>

            <View style={styles.firstPart}>
            <Text style={styles.Header}>Product Page</Text>
            </View>

            <View style={styles.secondPart} flexDirection='row'>

                <View style={styles.firstPart}>
                <ProductIcon />
                </View>
                <View style={styles.firstPart}>
                    <Text style={styles.text1}>End Offer: </Text>
                    <TextInput style={styles.inputBox}></TextInput>
                    <TouchableOpacity onPress={this.gotoNextActivity} style={styles.button}><Text style={styles.buttonText}>Give Offer</Text></TouchableOpacity>
                </View>

            </View>

            <View style={styles.thirdPart}>
            <Text style={styles.text1}> Information About Product </Text>
            </View>

        </View>
)
}
}

const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5fcff',
        padding: 11

    },

    firstPart: {
        flex: 1,
        backgroundColor: '#7986cb',
        alignItems: 'center'
    },

    secondPart: {

        flex: 2,
        backgroundColor: '#7986cb',
        alignItems:'center'
    },

    thirdPart: {

        flex:3,
        backgroundColor: 'white',
        borderWidth: 10,
        borderRadius: 20,
        borderColor: '#7986cb',
        alignItems: 'center'
    },

    button: {
            backgroundColor: '#ffab00',
            width: 300,
            borderRadius: 25,
            marginVertical: 25,
            paddingVertical: 10,
            width: 100,
            alignItems: 'flex-end'
    },

    buttonText: {
            fontSize: 16,
            fontWeight: "500",
            color: "#ffffff",
            textAlign: 'center',
    },

    text1:{
            fontSize: 24,
            color: '#000',
            textAlign: 'center',
            marginBottom: 10
        },

    Header:{
            fontSize: 30,
            color: '#000',
            textAlign: 'left',
            marginBottom: 10
    },

    inputBox:{
            width:100 ,
            backgroundColor: '#aab6fe',
            paddingHorizontal: 16,
            fontSize: 16,
            marginVertical: 10
    }


});