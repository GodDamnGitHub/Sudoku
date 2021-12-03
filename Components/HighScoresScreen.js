import React, { useState, useEffect, useRef, createRef, setState } from "react"
import { Button, View, Text, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Axios from 'axios'


const url = "https://secure-earth-67171.herokuapp.com";



const Item = ({ name, time, date}) => (
  <View style={styles.item}>
    <Text style={{fontSize:32}}>{name}  {time}  {date}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item name={item.name} time={item.time + 's'} date={item.createdAt.substring(0,10)}/>
);


function HighScoresScreen() {

  const [data, setData] = useState("");

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }

  const getData = () => {
    try {
      Axios.get(url+'/scores')
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        //alert(data[0]);
        //console.log(response.data[0]);
        //alert(response.data[0].age);
      });
    } catch(e) {
      console.log("error in getData ")
      console.dir(e)
      // error reading value
    } 
  }

  const getMyData = () => {
    AsyncStorage.getItem('@name')
    .then((response) => {
      Axios.get(url+'/myscores/'+response)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        //alert(data[0]);
        //console.log(response.data[0]);
        //alert(response.data[0].age);
      })
    }) 
  }

  useEffect(() => {
    //clearAll();
    getMyData()
  },[])

  
  return (

    
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button color="green" 
          title="Local" 
          onPress={() => {
            AsyncStorage.getItem('@name')
            .then((response) => {
              //setData(response.data);
              console.log(response);
              getMyData(response);
              //alert(data[0]);
              //console.log(response.data[0]);
              //alert(response.data[0].age);
            });
          }}>
        </Button>
        <Button color="blue" 
          title="Global" 
          onPress={() => {
            getData();
          }}>
        </Button>
      </View>
      <View style={styles.data}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.createdAt}
            ItemSeparatorComponent={FlatListItemSeparator}
        />
      </View>

    </View>
  );
}

export default HighScoresScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'row', 
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  data: {
    flex: 10, 
    alignItems: 'center',
    justifyContent: 'center'  },
  item: {
    //backgroundColor: 'grey',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});


