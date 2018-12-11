import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { AppRegistiry, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from './components/Logo';
import ProductIcon from './components/ProductIcon';

export default class VisitorProductScreen extends Component{


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

});