import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {wHeight, wWidth} from '../../Component/StyledComponent';

const JobDescription = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardTopContainer}>
          <View style={styles.topLeftConatiner}>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../../../assets/apple_logo.jpeg')}
                style={styles.image}
              />
            </View>
          </View>

          <View style={styles.topRightContainer}>
            <Text style={styles.companyname}>Apple</Text>
            <Text
              style={[styles.title, styles.whiteColor, {marginVertical: 5}]}>
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
      <View style={{marginVertical: 10}}>
        <View style={styles.descriptionconteiner}>
          <View style={styles.descriptionLeftContainer}>
            <Text>Icon</Text>
          </View>
          <View>
            <Text style={styles.title}>Description</Text>
            <Text style={[styles.greyColor, styles.paddingVertical]}>
              We are looking for intelligent
            </Text>
            <Text style={[styles.greyColor, styles.paddingVertical]}>
              innovative,and hardworking people
            </Text>
            <Text style={[styles.greyColor, styles.paddingVertical]}>
              Who can add value as ui/ux designer
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginVertical: 10}}>
        <View style={styles.descriptionconteiner}>
          <View style={styles.descriptionLeftContainer}>
            <Text>Icon</Text>
          </View>
          <View>
            <Text style={styles.title}>Responsibility</Text>
            <Text style={[styles.greyColor, styles.paddingVertical]}>
              Conduct user research
            </Text>
            <Text style={[styles.greyColor, styles.paddingVertical]}>
              visual designing,wireframing
            </Text>
            <Text style={[styles.greyColor, styles.paddingVertical]}>
              Build top class experience
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginVertical: 10}}>
        <View style={styles.descriptionconteiner}>
          <View style={styles.descriptionLeftContainer}>
            <Text>Icon</Text>
          </View>
          <View>
            <Text style={styles.title}>Skills</Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
              }}>
              <Text style={{padding: 5}}>ui/ux designer</Text>
              <Text style={{padding: 5}}>research</Text>
              <Text style={{padding: 5}}>Sketch</Text>
            </View>
          </View>
        </View>
      </View>
      <Button title={'apply now'} color={'#292BB0'} />
    </View>
  );
};
export default JobDescription;
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
    height: wHeight * 0.3,
    backgroundColor: '#292BB0',
    borderRadius: 20,
    marginVertical: 5,
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
  whiteColor: {
    color: 'white',
  },
  paddingVertical: {
    paddingVertical: 2,
  },
  descriptionconteiner: {
    flexDirection: 'row',
  },
  descriptionLeftContainer: {
    width: '20%',
  },
});
