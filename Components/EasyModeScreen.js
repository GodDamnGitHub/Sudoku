import React, { useState, useEffect, useRef, createRef, setState } from "react"
import { Button, View, Text, StyleSheet, ImageBackground, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Grid from './Grid.js';


function EasyModeScreen() {
  let vals = [["","",5,8,"","",9,2,""],
              ["","","","",4,9,8,5,1], 
              ["",9,1,2,"","","","",3],
              ["","",3,4,2,"",5,6,""],
              ["",5,4,6,"",3,"","",""],
              [6,8,"",9,1,5,"",4,""],
              [4,"","","",3,"",6,"",""],
              ["","",2,5,9,"","","",""],
              ["","",8,"",6,4,"","",9]];
  const [isInput, setIsInput] = useState(false);
  const [userName, setUserName] = useState("");
  if (!isInput) {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText = {(text) => {
            setUserName(text);
          }}
          placeholder="Please enter your name"
        />
        <Button color="blue" 
          title="submit" 
          onPress={() => {
            setIsInput(true);
          }}>
        </Button>
      </View>

    );
  } else {
    return (
      <View style={styles.container}>
        <Grid vals={vals} userName={userName}/>
      </View>
    );
  }

}


export default EasyModeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


