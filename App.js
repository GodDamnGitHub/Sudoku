import * as React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground, Image, useWindowDimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EasyModeScreen from './Components/EasyModeScreen.js';
import HardModeScreen from './Components/HardModeScreen.js';
import HighScoresScreen from './Components/HighScoresScreen.js';
import AboutScreen from './Components/AboutScreen.js';


function HomeScreen({ navigation }) {
  const window = useWindowDimensions();


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
        </View>
        <View style={styles.bottomView}>

        </View>

      </ImageBackground>

    </View>
  );
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
});