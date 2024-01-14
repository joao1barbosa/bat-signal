import React, {useState} from 'react';
import { StyleSheet, Text, Pressable, Modal, View, Image } from 'react-native';

import blinkBatman from "../../assets/blinkBatman.png";

interface SubmitButtonProps{
    navigation:any,
}


export function SubmitButton(props: SubmitButtonProps) {
  const [modalVisible, setModalVisible] = useState(false);
  
  function delay() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(setModalVisible(false));
      }, 1800)
    });
  }

  function goBacktoMenu(props:SubmitButtonProps){
    setModalVisible(true);

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