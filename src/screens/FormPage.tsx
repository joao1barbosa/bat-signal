import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { BatForm } from '../components/BatForm';
import batLogo from "../../assets/batIcon.png";


export function FormPage() {
  return (
    <View style={styles.main}>
      <Image source={batLogo} style={styles.image}/>
      <View style={styles.form}>
        <BatForm/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor:'grey'
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    position: 'absolute',
    width: 330,
    height: 190,
    opacity: 0.5
  },
  form:{
    flex:1,
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    position: 'absolute'
  }
});