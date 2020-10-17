import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {wHeight, wWidth} from '../../Component/StyledComponent';
import DescriptionCard from './components/DescriptionCard';
import Card from './components/card';

const JobDescription = ({props}) => {
  return (
    <View style={styles.container}>
      <Card {...props} />
      <DescriptionCard
        image={require('../../../assets/job-description.png')}
        title={'Description'}
        {...props}>
        <Text style={[styles.greyColor, styles.paddingVertical]}>
          We are looking for intelligent
        </Text>
        <Text style={[styles.greyColor, styles.paddingVertical]}>
          innovative,and hardworking people
        </Text>
        <Text style={[styles.greyColor, styles.paddingVertical]}>
          Who can add value as ui/ux designer
        </Text>
      </DescriptionCard>

      <DescriptionCard
        image={require('../../../assets/responsibility.png')}
        title={'Responsibility'}
        {...props}>
        <Text style={[styles.greyColor, styles.paddingVertical]}>
          Conduct user research
        </Text>
        <Text style={[styles.greyColor, styles.paddingVertical]}>
          visual designing,wireframing
        </Text>
        <Text style={[styles.greyColor, styles.paddingVertical]}>
          Build top class experience
        </Text>
      </DescriptionCard>
      <DescriptionCard
        image={require('../../../assets/skill.png')}
        title={'Skills'}
        {...props}>
        <View style={styles.skillstextWrapper}>
          <Text style={styles.skillsText}>ui/ux designer</Text>
          <Text style={styles.skillsText}>research</Text>
          <Text style={styles.skillsText}>Sketch</Text>
        </View>
      </DescriptionCard>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.whiteColor}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};
export default JobDescription;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
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
  iconContainer: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
  skillstextWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 10,
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
  skillsText: {
    padding: 5,
    backgroundColor: '#F5F5F7',
    borderRadius: 10,
    marginHorizontal: 8,
  },
});
