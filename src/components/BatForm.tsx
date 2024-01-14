import React from 'react';
import { View, StyleSheet, TextInput, Text, ScrollView } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { ImageUploader } from './ImageUploader';
import { SubmitButton } from '../components/SubmitButton';

interface BatFormProps{
  navigation:any
}

export function BatForm(props: BatFormProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Acrescente uma imagem: </Text>
      <ImageUploader/>
      <Text style={styles.textStyle}>Descreva o que aconteceu:</Text>
      <View style={styles.textInputerConteiner} >
        <TextInput 
          style={styles.textInputer} 
          multiline={true} 
          placeholder='Descrição'
          maxLength={78}
        />
      </View>
      <SubmitButton navigation={props.navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },

  textStyle:{
    alignSelf: 'flex-start',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5,
  },

  textInputerConteiner:{
    borderWidth: 4,
    borderRadius:5,
    borderColor: 'black',
    height:80,
    width:'100%',
  },

  textInputer: {
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor:'white',
    opacity: 0.3,

    height:'100%',
    width:'100%',
  }
});