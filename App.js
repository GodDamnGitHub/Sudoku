import React, { useState, useEffect, useRef, createRef, setState } from "react"
import { Button, View, Text, StyleSheet, ImageBackground, Image, useWindowDimensions, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EasyModeScreen from './Components/EasyModeScreen.js';
import HardModeScreen from './Components/HardModeScreen.js';
import HighScoresScreen from './Components/HighScoresScreen.js';
import AboutScreen from './Components/AboutScreen.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'


const url = "https://secure-earth-67171.herokuapp.com";




function HomeScreen({ navigation }) {
  const window = useWindowDimensions();
  const [isInput, setIsInput] = useState(false);
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const logout = () => {
    alert("!");
  }

  if (!isInput) {
    return (
      <View style={styles.container0}>
      <TextInput
        style={styles.input}
        onChangeText = {(text) => {
          setName(text);
        }}
        placeholder="enter your name"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText = {(text) => {
          setPassword(text);
        }}
        placeholder="enter your password"
      />
      <Button color="blue" 
        title="LOGIN" 
        onPress={() => {
          let data = {name: name, password: password};
          Axios.post(url+'/login', data)
          .then((response) => {
            console.log(response.data);
            if (response.data == "wrong password") {
              alert("Wrong Password!");
            } else {
              if (response.data == "new user registered") {
                alert("Hello new user!\nYou are now registered!\nname: "+name+"\npassword: "+password);
              } else if (response.data == "login completes") {
                alert("Log in successfully!");
              }
              AsyncStorage.setItem('@name', name);
              setIsInput(true);
            }

          });
        }}>
      </Button>

    </View>
    )
  } else {
    return (

      <View style={styles.container}>
        <ImageBackground source={require('./assets/imageBack0.png')} resizeMode="cover" style={styles.imageBack}>
          <View style={styles.titleView}>
          <Image style={styles.imageTitle} source={require('./assets/Sudoku.png')} />
          </View>        
          <View style={styles.buttonView}>
  
            <Button
              title="Easy Mode"
              onPress={() => navigation.navigate('EasyMode')}
            />
            <Button
              title="Hard Mode"
              onPress={() => navigation.navigate('HardMode')}
            />
            <Button
              title="High Scores"
              onPress={() => navigation.navigate('HighScores')}
            />
            <Button
              title="About"
              onPress={() => navigation.navigate('About')}
            />
            <Button
              title="Log out"
              onPress={() => {
                setIsInput(false);
              }}
            />
          </View>
          <View style={styles.bottomView}>
  
          </View>
  
        </ImageBackground>
  
      </View>
    );
  }

}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EasyMode" component={EasyModeScreen} />
        <Stack.Screen name="HardMode" component={HardModeScreen} />
        <Stack.Screen name="HighScores" component={HighScoresScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;

const styles = StyleSheet.create({
  container0: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    flexDirection:'column',
  },
  titleView: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonView: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bottomView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageBack: {
    flex: 1,
    justifyContent: "center"
  },
  imageTitle: {
    flex: 1,
    width: 400
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});