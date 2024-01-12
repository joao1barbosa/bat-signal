import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ImageUploader } from './ImageUploader';
import { SubmitButton } from '../components/SubmitButton';

interface BatFormProps{
  navigation:any
}

export function BatForm(props: BatFormProps) {
  return (
    <View style={styles.container}>
        <ImageUploader/>
        <SubmitButton navigation={props.navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    width: '80%',
  }
});