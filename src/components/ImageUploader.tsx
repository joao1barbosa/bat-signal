import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export function ImageUploader() {
  return (
    <View style={styles.main}>
        <Text>Acrescente uma imagem (se possível)</Text>
        <View style={styles.insertArea}/>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent: 'center',
    
    borderWidth: 2,
    borderBlockColor: 'white',
    borderRadius:5,
  },
  insertArea:{
    
  }
});