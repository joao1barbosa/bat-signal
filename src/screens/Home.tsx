import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Logo } from '../components/MainLogo';
import { HelpButton } from '../components/HelpButton';

interface HomeProps{
  navigation:any
}

export function Home( props: HomeProps ) {
  return (
    <View style={styles.main}>
      <View style={styles.center}>
        <Logo/>
        <HelpButton navigation={props.navigation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor:'grey'
  },

  center:{
    flex: 0.47,
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems: 'center',
    borderColor: 'black',
  },
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