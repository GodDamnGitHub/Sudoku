import React, { useState, useEffect, useRef, createRef, setState } from "react"
import { Button, View, Text, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'


function HighScoresScreen() {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@sudoku_bes');
      alert(jsonValue);
      let data = null
      if (jsonValue!=null) {
        data = JSON.parse(jsonValue)
        //alert(jsonValue);
        console.log('just set Info, Correct and Answered')
      } else {
        console.log('just read a null value from Storage')
        alert("!");
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
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
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


