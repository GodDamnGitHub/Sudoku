import * as React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function EasyModeScreen() {
  return (
    <View style={styles.container}>
      <Text>EasyModeScreen</Text>
    </View>
  );
}


export default EasyModeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});


