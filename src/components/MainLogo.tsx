import { StyleSheet, View, Image } from 'react-native';

import batLogo from "../../assets/batIcon.png";

export function Logo() {
  return (
    <>
      <Image source={batLogo} style={styles.logo}/>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    flexDirection: "column",
    alignContent: "center",
    height: 180,
    width: 320
  }
});