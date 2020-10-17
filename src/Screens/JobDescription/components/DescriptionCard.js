import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {wHeight, wWidth} from '../../../Component/StyledComponent/index';
const DescriptionCard = ({image, title, ...props}) => {
  return (
    <View style={styles.container}>
      <View style={styles.descriptioncontainer}>
        <View style={styles.descriptionLeftContainer}>
          <View style={styles.iconContainer}>
            <Image source={image} style={styles.image} />
          </View>
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          {props.children}
        </View>
      </View>
    </View>
  );
};
export default DescriptionCard;
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  imageWrapper: {
    width: 70,
    height: 70,
    borderRadius: 25,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  greyColor: {
    color: 'grey',
    fontWeight: 'normal',
  },
  whiteColor: {
    color: 'white',
  },
  paddingVertical: {
    paddingVertical: 2,
  },
  descriptioncontainer: {
    flexDirection: 'row',
  },
  descriptionLeftContainer: {
    width: '15%',
    alignItems: 'center',
  },
  iconContainer: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
  skillstextWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
