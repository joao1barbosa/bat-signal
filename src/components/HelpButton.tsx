import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

interface HelpButtonProps{
  navigation:any
}

export function HelpButton(props: HelpButtonProps) {
  return (
    <>
        <Pressable
            onPress={ ()=>{props.navigation.navigate('FormPage') }}
            style={styles.button}
        >

            <Text style={styles.text}>HELP ME!</Text>
        
        </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  text:{
    fontSize:22,
    lineHeight:26,
    fontWeight:'bold',
    letterSpacing:0.4,
    color:"white"
  },
  button:{
    alignItems: 'center',
    width:'100%',
    justifyContent:'center',
    paddingVertical: 18,
    paddingHorizontal: 55,
    borderRadius: 5,
    elevation: 5,
    backgroundColor:"#252525",
    marginTop: 6
  }
});