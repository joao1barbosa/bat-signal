import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Pressable, Modal, View, Image } from 'react-native';
import { Audio } from 'expo-av';

import blinkBatman from "../../assets/blinkBatman.png";
import batmanTrasition from '../../assets/batmanTransition.mp3';

interface SubmitButtonProps{
    navigation:any,
}

export function SubmitButton(props: SubmitButtonProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [sound, setSound] = useState<undefined | Audio.Sound >(undefined);

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(batmanTrasition);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  
  function delay() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(setModalVisible(false));
      }, 1600)
    });
  }

  function goBacktoMenu(props:SubmitButtonProps){
    setModalVisible(true);
    playSound();

    delay().then(()=>{
      props.navigation.goBack()
    });
  }

  return (
    <>
      <Pressable
        onPress={() => {goBacktoMenu(props)}}
        style={styles.button}
      >

        <Text style={styles.text}>Submit</Text>
          
      </Pressable>

      <Modal
      transparent={true}
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Image source={blinkBatman} style={styles.modalImage}/>
          <Text style={styles.modalText}>ESTOU A CAMINHO!</Text>
        </View>

      </Modal>
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
        width:'80%',
        justifyContent:'center',
        paddingVertical: 18,
        paddingHorizontal: 55,
        borderRadius: 5,
        elevation: 5,
        backgroundColor:"#252525",
        marginTop: 30,
    },
    modalContainer:{
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',

      height: "auto",
      width: "auto",
      
      backgroundColor:'#252525',

      borderWidth: 5,
      borderRadius: 20,
      borderColor: 'black',

      marginTop:300,
    },
    modalImage:{
      height: 100,
      width: 100,
      marginBottom: 15,
      marginTop:20  
    },
    modalText:{
      fontSize: 30,
      fontWeight:'bold',
      color: '#ffffff',
      letterSpacing:0.1,

      marginBottom:15,
      marginHorizontal:10
    }
  });