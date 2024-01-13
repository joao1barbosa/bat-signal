import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

interface SubmitButtonProps{
    navigation:any
}

function goBacktoMenu(props:SubmitButtonProps){
    
    //animação de transição

    setTimeout(() => {
        props.navigation.goBack();
    }, 1800);
}

export function SubmitButton(props: SubmitButtonProps) {
  return (
    <Pressable
      onPress={() => {goBacktoMenu(props)}}
      style={styles.button}
    >

      <Text style={styles.text}>Submit</Text>
        
    </Pressable>
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
        width:'80%',
        justifyContent:'center',
        paddingVertical: 18,
        paddingHorizontal: 55,
        borderRadius: 5,
        elevation: 5,
        backgroundColor:"#252525",
        marginTop: 30,
    }
  });