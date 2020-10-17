import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';
import {wHeight, wWidth} from '../../../Component/StyledComponent';
const Card = ({image, companyname, jobtitle, location, date, onpress}) => {
  return (
    <View style={styles.cardContainer} key={jobtitle}>
      <View style={styles.cardTopContainer}>
        <View style={styles.topLeftConatiner}>
          <View style={styles.imageWrapper}>
            <Image source={image} style={styles.image} />
          </View>
        </View>

        <View style={styles.topRightContainer}>
          <Text style={styles.companyname}>{companyname}</Text>
          <Text style={styles.title}>{jobtitle}</Text>
          <Text style={styles.greyColor}>{location}</Text>
        </View>
      </View>
      <View style={styles.dashed} />
      <View style={styles.cardBottomContainer}>
        <Text style={styles.dummyContainer} />
        <Text style={[styles.datefield, styles.greyColor]}>{date}</Text>

        <Text style={styles.Applyfield} onPress={onpress}>
          Apply {'>'}
        </Text>
      </View>
    </View>
  );
};
export default Card;
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  cardContainer: {
    height: wHeight * 0.28,
    // backgroundColor: "green",
    borderRadius: 20,
    marginVertical: 5,
    flexDirection: 'column',
    // borderWidth: 0.1,
    backgroundColor: 'white',
    elevation: 5,
    overflow: 'hidden',
  },
  cardTopContainer: {
    height: '70%',
    // backgroundColor: "red",
    flexDirection: 'row',
    alignItems: 'center',
  },
  topLeftConatiner: {
    width: '40%',
    // backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  topRightContainer: {
    alignItems: 'flex-start',
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
  companyname: {
    backgroundColor: '#FEF4F1',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 10,
  },
  dashed: {
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 0.6,
    borderRadius: 1,
    height: 1,
  },
  cardBottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dummyContainer: {
    width: '40%',
  },
  datefield: {
    width: '30%',
  },
  Applyfield: {
    flex: 1,
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 20,
    fontWeight: '700',
    color: '#8176C4',
  },
  greyColor: {
    color: 'grey',
    fontWeight: 'normal',
  },
});
