import React from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Platform } from 'react-native';

import { BatForm } from '../components/BatForm';
import batLogo from "../../assets/batIcon.png";

interface FormPageProps{
  navigation:any
}

export function FormPage(props:FormPageProps) {
  return (
    <View style={styles.main}>
      <Image source={batLogo} style={styles.image}/>
      <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.form}> 
        <View style={styles.alignView}>
          <BatForm navigation={props.navigation}/>
        </View>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'grey',
    borderWidth: 5,
    borderColor: 'black',
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
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',

  },
  alignView:{
    flex: 1,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});