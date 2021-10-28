import React, { useState, useEffect, useRef, createRef, setState } from "react"
import { Button, View, Text, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'


function HighScoresScreen() {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@sudoku_bes');
      let data = null
      if (jsonValue!=null) {
        data = JSON.parse(jsonValue)
        //alert(jsonValue);
        console.log('just set Info, Correct and Answered')
      } else {
        console.log('just read a null value from Storage')
      }
    } catch(e) {
      console.log("error in getData ")
      console.dir(e)
      // error reading value
    }
  }

  useEffect(() => {
    getData()
  },[])

  return (

    
    <View style={styles.container}>
      <Text>HighScoresScreen</Text>
    </View>
  );
}

export default HighScoresScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});


