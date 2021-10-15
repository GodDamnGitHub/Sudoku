import * as React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HardModeScreen() {
  return (
    <View style={styles.container}>
      <Text>HighScoresScreen</Text>
    </View>
  );
}

export default HardModeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});


