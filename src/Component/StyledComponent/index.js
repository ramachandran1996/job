import React  from 'react';
import {View, Dimensions} from 'react-native';

export const wWidth = Dimensions.get('window').width;

export const wHeight = Dimensions.get('window').height;

export const Br = ({...props}) => {
  return <View style={{height: 50}}>{props.children}</View>;
};
