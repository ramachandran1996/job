import React from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const wWidth = Dimensions.get('window').width;

export const wHeight = Dimensions.get('window').height;

export const Br = ({...props}) => {
  return <View style={{height: 50}}>{props.children}</View>;
};

export const ImageComponent = ({addstyles, image, resizemode}) => {
  return (
    <View style={[addstyles]}>
      <Image source={image} style={[styles.image, {resizeMode: resizemode}]} />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    height: 50,
    width: '100%',
    marginTop: 5,
    backgroundColor: '#292BB0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteColor: {
    color: 'white',
    fontSize: 18,
  },
});

export const Button = ({onpress, width, label, addstyles}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {width: width}, addstyles]}
      onPress={onpress}>
      <Text style={styles.whiteColor}>{label}</Text>
    </TouchableOpacity>
  );
};
