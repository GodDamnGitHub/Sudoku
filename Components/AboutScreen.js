import * as React from 'react';
import { Button, View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function AboutScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/imageBack.jpeg')} resizeMode="cover" style={styles.imageBack}>

      <View style={styles.p1}>
        <Text style={{fontSize: 30}}>
          The Origin of Sudoku{'\n'}{'\n'}
        </Text>
        <Text>
          Sudoku, originally called Number Place is a logic-based, combinatorial number-placement puzzle. In classic sudoku, the objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids that compose the grid (also called "boxes", "blocks", or "regions") contain all of the digits from 1 to 9. The puzzle setter provides a partially completed grid, which for a well-posed puzzle has a single solution.{'\n'}{'\n'}

          French newspapers featured variations of the Sudoku puzzles in the 19th century, and the puzzle has appeared since 1979 in puzzle books under the name Number Place.However, the modern Sudoku only began to gain widespread popularity in 1986 when it was published by the Japanese puzzle company Nikoli under the name Sudoku, meaning "single number". It first appeared in a U.S. newspaper, and then The Times (London), in 2004, thanks to the efforts of Wayne Gould, who devised a computer program to rapidly produce unique puzzles.{'\n'}{'\n'}
        </Text>

        <Text style={{fontSize: 30}}>
          About This Game{'\n'}{'\n'}
        </Text>

        <Text>
          In easy mode, even beginners will have fun, but the hard mode is only for experienced sudoku solvers. Fewer numbers are given and you should know advanced sudoku solving techniques. {'\n'}{'\n'}

          A timer will start when you begin to play. When you finish, you will be asked to input your name, and the time you spent will be shown on the "High Scores" page. Enjoy the game!
        </Text>
      </View>
      </ImageBackground>
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  p1: {
    flex: 2,
    padding: 20,
    borderWidth: 3
  },
});


