import React, {useEffect, useState, useCallback} from 'react';
// import { StatusBar } from "expo-status-bar";
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, StyleSheet} from 'react-native';

import {wHeight, ImageComponent} from '../../Component/StyledComponent';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Card from './component/Card';

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
        <View style={styles.searchContainer}>
          <View style={styles.searchContainerLeft}>
            <ImageComponent
              resizemode={'contain'}
              image={require('../../../assets/searchicons.png')}
              addstyles={styles.searchIcon}
            />
            <TextInput placeholder={'search for jobs'} style={styles.flex} />
          </View>
          <View style={styles.filterContainer}>
            <ImageComponent
              image={require('../../../assets/filter-icon.png')}
              addstyles={styles.filerIcon}
              resizemode={'contain'}
            />
          </View>
        </View>
        <View style={styles.flex}>
          <Text style={styles.title}>Jobs for you</Text>
          {JobsInformation.map((item) => {
            return (
              <Card
                key={item.jobtitle}
                image={item.Image}
                companyname={item.companyname}
                jobtitle={item.jobtitle}
                location={item.location}
                date={item.date}
                onpress={() => navigation.navigate('Jobs')}
              />
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
        <ImageComponent
          image={require('../../../assets/driver_photo.jpg')}
          addstyles={styles.headerImageWrapper}
          resizemode={'cover'}
        />
        <View style={styles.dot} />
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
  searchContainer: {
    height: wHeight * 0.07,
    marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchContainerLeft: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 50,
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterContainer: {
    backgroundColor: '#F6804D',
    borderRadius: 20,
    width: '16%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filerIcon: {
    width: 30,
    height: 30,
  },
  dot: {
    backgroundColor: '#F6804D',
    width: 8,
    height: 8,
    position: 'absolute',
    borderRadius: 4,
    top: -2,
  },
});
