import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {wWidth, wHeight} from '../../../Component/StyledComponent';
const Card = ({...props}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTopContainer}>
        <View style={styles.topLeftConatiner}>
          <View style={styles.imageWrapper}>
            <Image
              source={require('../../../../assets/apple_logo.jpeg')}
              style={styles.image}
            />
          </View>
        </View>

        <View style={styles.topRightContainer}>
          <Text style={styles.companyname}>Apple</Text>
          <Text style={[styles.title, styles.whiteColor, {marginVertical: 5}]}>
            Product Designer
          </Text>
          <Text style={styles.greyColor}>Chennai, Tn</Text>
        </View>
      </View>
      {/* <View style={styles.dashed} /> */}
      <View style={styles.bottomWrapper}>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomLeftContainer}>
            <Text style={styles.greyColor}>Type</Text>
            <Text style={[styles.title, styles.whiteColor]}>Full-time</Text>
          </View>
          <View style={styles.middleLine} />
          <View style={styles.bottomLeftContainer}>
            <Text style={styles.greyColor}>Experience</Text>
            <Text style={[styles.title, styles.whiteColor]}>3+ years</Text>
          </View>
        </View>
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
    height: wHeight * 0.3,
    backgroundColor: '#292BB0',
    borderRadius: 20,
    // marginVertical: 20,
    flexDirection: 'column',
    // borderWidth: 0.1,
    // backgroundColor: 'white',
    elevation: 5,
    overflow: 'hidden',
    paddingBottom: 15,
  },
  cardTopContainer: {
    height: '60%',
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
    backgroundColor: '#604CB9',
    paddingHorizontal: 7,
    paddingVertical: 2,
    color: 'red',
    borderRadius: 10,
  },
  middleLine: {
    width: 1,
    height: '50%',
    backgroundColor: 'grey',
    marginRight: 5,
  },
  bottomWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bottomContainer: {
    backgroundColor: '#604CB9',
    height: '90%',
    //   marginBottom:15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
  },
  bottomLeftContainer: {
    width: '49%',
    padding: 15,
  },
 
  greyColor: {
    color: 'grey',
    fontWeight: 'normal',
  },
  whiteColor: {
    color: 'white',
  },

});
