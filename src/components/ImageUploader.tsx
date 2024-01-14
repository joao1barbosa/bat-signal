import React, {useState} from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);
  
  async function selectImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1,1],
      quality:1,
    });

    if(!result.canceled){
      setImage(result.assets[0].uri);
    }

  }

  return (
    <Pressable style={styles.insertArea} onPress={selectImage}>
          
      {image 
      ? 
        <>        
          <Image source={{ uri: image }} style={styles.main}/>
        </>

      : 
        <View style={[styles.main, {opacity: 0.3}]}>
          <Text style={styles.cameraEmoji}>📷</Text>
          <Text style={styles.text}>(se possível)</Text>
        </View>}
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
    opacity: 1,
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