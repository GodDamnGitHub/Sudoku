import React, { useState, useEffect, useRef, createRef, setState } from "react"
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';



const Timer = ({updateTime}) => {
  const [second, setSecond] = useState(0);


  useEffect(() => {  
    const intervalId = setInterval(() => {
      setSecond(second + 1);
      updateTime(second + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [second]);


  return (
    <div>
      <h1>{parseInt(second / 60) < 10 ? "0" + parseInt(second / 60) : parseInt(second % 60)}:{(second % 60) < 10 ? "0" + second % 60 : second % 60}</h1>
    </div>
  )
}


export default Timer;


const styles = StyleSheet.create({
  largeGrid:{
    border:'solid black'
  },
  gridRow:{
    flexDirection: 'row'
  },
  smallGrid:{
    border:'thin solid black'
  },
  Row: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  Cell:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF2F8',
    margin: 2,
    height: 40,
    width: 40,
  }
});