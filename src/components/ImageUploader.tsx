import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export function ImageUploader() {
  return (
    <Pressable style={styles.insertArea}>    
      <View style={styles.main}>
        <Text style={styles.cameraEmoji}>📷</Text>
        <Text style={styles.text}>(se possível)</Text>
      </View>
    </Pressable>

  );
}

const styles = StyleSheet.create({
  insertArea:{
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems:'center',
    width: "100%",
    height: "80%",
    marginBottom:30,

    borderWidth: 5,
    borderBlockColor: 'black',
    borderRadius: 5,
  },
  main:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'white',
    opacity:0.3,
    width: '100%',
    height: '100%'
  },
  cameraEmoji:{
    fontSize:60,
  },
  text:{
    fontSize:20,
    fontWeight:'bold'
  }
});