import React, { useState, useEffect } from "react";
import { Button, View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CloudRegistration from './CloudRegistration';
import { MarkdownView } from 'react-native-markdown-view'


function AboutScreen() {

  const[file, setFile] = useState();



  return (
    <View style={styles.container}>
      <ScrollView>

      <MarkdownView>
        # About the Project{'\n'}
        {'\n'}
        This is a sudoku app based on react native. Create your account, log in, and enjoy the game. There is a hint function to tell you where the conflics are when You will enter a wrong number. If finished, press the submit button and your score will be recorded. Check both local and global high scores on High Score page.  An express server which interacts with MongoDB is deployed to heroku so players all around the world can play this game. Runs on both webpage and iOS.
        {'\n'}
        {'\n'}

        ![RN Logo](https://github.com/GodDamnGitHub/Sudoku/blob/CPA5/img/e1.png?raw=true){'\n'}
        ![RN Logo](https://github.com/GodDamnGitHub/Sudoku/blob/CPA5/img/e2.png?raw=true){'\n'}
        ![RN Logo](https://github.com/GodDamnGitHub/Sudoku/blob/CPA5/img/e3.png?raw=true){'\n'}
        ![RN Logo](https://github.com/GodDamnGitHub/Sudoku/blob/CPA5/img/e4.png?raw=true){'\n'}
        {'\n'}
        # Built With {'\n'}
          * React {'\n'}
          * React Native{'\n'}
          * AsyncStorage{'\n'}
          * Axios {'\n'}
          * MarkdownView {'\n'}

        
      </MarkdownView>   
      </ScrollView> 
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  p1: {
    flex: 2,
    padding: 20,
    borderWidth: 3
  },
});


