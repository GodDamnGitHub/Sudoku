import React, { useState, useEffect, useRef, createRef, setState } from "react"
import { Button, View, Text, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'


const Item = ({ name, time }) => (
  <View style={styles.item}>
    <Text style={{fontSize:32}}>{name}    {time}</Text>
  </View>
);


function HighScoresScreen() {

  const [data, setData] = useState("");


  const renderItem = ({ item }) => (
    <Item name={item.userName} time={item.timeText} />
  );

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@sudoku_scores');
      let data = null
      if (jsonValue!=null) {
        data = JSON.parse(jsonValue);
        setData(data.sort((a,b)=>a.time-b.time));
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

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch(e) {
      console.dir(e);
    }
  }

  useEffect(() => {
    //clearAll();
    getData()
  },[])

  
  return (

    
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
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
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});


