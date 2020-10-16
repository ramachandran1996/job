import React, {useEffect, useState, useCallback} from 'react';
// import { StatusBar } from "expo-status-bar";
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, StyleSheet} from 'react-native';

import {wHeight} from '../../Component/StyledComponent';
import {ScrollView} from 'react-native-gesture-handler';

const JobsInformation = [
  {
    Image: require('../../../assets/apple_logo.jpeg'),
    companyname: 'Apple',
    jobtitle: 'Product Designer',
    location: 'Chennai, Tn',
    date: '. 5 days ago',
  },
  {
    Image: require('../../../assets/Untappd.png'),
    companyname: 'Untapped',
    jobtitle: 'Graphic / UI Designer',
    location: 'Bangalore, India',
    date: '. New',
  },
  {
    Image: require('../../../assets/paypal-logo.png'),
    companyname: 'Paypal',
    jobtitle: 'sr. UX Designer',
    location: 'Chennai,TN',
    date: '. New',
  },
];

const HomeScreen = ({...props}) => {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Header />
        <View style={styles.flex}>
          <Text style={styles.title}>Jobs for you</Text>
          {JobsInformation.map((item) => {
            return (
              <View style={styles.cardContainer} key={item.jobtitle}>
                <View style={styles.cardTopContainer}>
                  <View style={styles.topLeftConatiner}>
                    <View style={styles.imageWrapper}>
                      <Image source={item.Image} style={styles.image} />
                    </View>
                  </View>

                  <View style={styles.topRightContainer}>
                    <Text style={styles.companyname}>{item.companyname}</Text>
                    <Text style={styles.title}>{item.jobtitle}</Text>
                    <Text style={styles.greyColor}>{item.location}</Text>
                  </View>
                </View>
                <View style={styles.dashed} />
                <View style={styles.cardBottomContainer}>
                  <Text style={styles.dummyContainer} />
                  <Text style={[styles.datefield, styles.greyColor]}>
                    {item.date}
                  </Text>

                  <Text style={styles.Applyfield}>Apply {'>'}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};
export default HomeScreen;

const Header = ({}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.HeaderleftContainer}>
        <Text style={[styles.title, styles.greyColor]}>Hello</Text>
        <Text style={[styles.title, {fontWeight: 'bold'}]}>Stanislov</Text>
      </View>
      <View style={styles.HeaderRightContainer}>
        <View style={styles.headerImageWrapper}>
          <Image
            source={require('../../../assets/driver_photo.jpg')}
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
  },
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
  headerContainer: {
    height: wHeight * 0.12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderleftContainer: {
    width: '80%',
  },
  HeaderRightContainer: {
    width: '20%',
    // backgroundColor: "green",
    alignItems: 'flex-end',
  },
  headerImageWrapper: {
    width: 40,
    height: 40,
    borderRadius: 15,
    overflow: 'hidden',
  },
});
