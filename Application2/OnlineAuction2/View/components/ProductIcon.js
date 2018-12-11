import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Image} from 'react-native';


export default class ProductIcon extends Component {
    render() {
      return (
        <View style={styles.container}>
          <Image style = {styles.image} source = {require('../images/ProductIcon.png')}/>
        </View>
      )
    }
  }

  const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7986cb',
        padding: 11,
        alignItems: 'center'

      },
      image : {
          width: 100,
          height: 70,
          alignItems: 'center'
      }
    }
  )