import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { BatForm } from '../components/BatForm';
import batLogo from "../../assets/batIcon.png";

interface FormPageProps{
  navigation:any
}

export function FormPage(props:FormPageProps) {
  return (
    <View style={styles.main}>
      <Image source={batLogo} style={styles.image}/>
      <View style={styles.form}>
        <BatForm navigation={props.navigation}/>
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
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: 330,
    height: 190,
    opacity: 0.5
  },
  form:{
    flex:1,
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth:10,
  }
});