import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ImageUploader } from './ImageUploader';

export function BatForm() {
  return (
    <View style={styles.container}>
        <ImageUploader/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: "white",
    // borderWidth: 2,
  }
});