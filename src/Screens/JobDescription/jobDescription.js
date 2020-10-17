import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {
  wHeight,
  wWidth,
  Button,
  ImageComponent,
} from '../../Component/StyledComponent';
import DescriptionCard from './components/DescriptionCard';
import Card from './components/Card';
import ApplyPage from './components/Applypage';
import SubmitPage from './components/SubmitPage';
import Modal from 'react-native-modal';

const Description = [
  'We are looking for intelligent',
  'Innovative,and hardworking people',
  'Who can add value as ui/ux designer',
  'Conduct user research', //responsibility
  'visual designing,wireframing',
  'Build top class experience',
  'ui/ux designer', //skills
  'research',
  'Sketch',
];
const JobDescription = ({props}) => {
  const [loading, setLoading] = useState(true);
  const [isvisible, setIsvisible] = useState(false);
  const [currenindex, setCurrentIndex] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); //componentdidmount
  }, []);
  const toggle = () => {
    setIsvisible(!isvisible);
  };

  return !loading ? (
    <View style={styles.container}>
      <Card {...props} />
      <DescriptionCard
        image={require('../../../assets/job-description.png')}
        title={'Description'}
        {...props}>
        {Description.slice(0, 3).map((item) => {
          return (
            <Text style={[styles.greyColor, styles.paddingVertical]} key={item}>
              {item}
            </Text>
          );
        })}
      </DescriptionCard>

      <DescriptionCard
        image={require('../../../assets/responsibility.png')}
        title={'Responsibility'}
        {...props}>
        {Description.slice(3, 6).map((item) => {
          return (
            <View style={styles.responsibiltyText}>
              <ImageComponent
                addstyles={styles.arrowRight}
                resizemode={'contain'}
                image={require('../../../assets/arrow_right.png')}
              />
              <Text
                style={[styles.greyColor, styles.paddingVertical]}
                key={item}>
                {item}
              </Text>
            </View>
          );
        })}
      </DescriptionCard>
      <DescriptionCard
        image={require('../../../assets/skill.png')}
        title={'Skills'}
        {...props}>
        <View style={styles.skillstextWrapper}>
          {Description.slice(6, Description.length).map((item) => {
            return (
              <Text style={styles.skillsText} key={item}>
                {item}
              </Text>
            );
          })}
        </View>
      </DescriptionCard>
      <Button
        label={'Apply'}
        onpress={() => {
          toggle();
        }}
        width={'100%'}
      />

      <Modal
        isVisible={isvisible}
        onBackdropPress={() => setIsvisible(false)}
        onBackButtonPress={() => setIsvisible(false)}
        animationIn={'bounceInUp'}
        animationOut={'slideOutDown'}
        useNativeDriver={true}
        animationInTiming={1200}
        animationOutTiming={1000}>
        <View style={styles.bottomSheetContainer}>
          {currenindex ? (
            <ApplyPage
              onpress={() => setCurrentIndex(!currenindex)}
              {...props}
            />
          ) : (
            <SubmitPage
              onpress={() => {
                setCurrentIndex(!currenindex);
                // setIsvisible(!isvisible);
              }}
              currenindex={currenindex}
              {...props}
              onsubmit={() => {
                setIsvisible(!isvisible);
                setTimeout(() => {
                  setCurrentIndex(!currenindex);
                }, 300);
              }}
            />
          )}
        </View>
      </Modal>
    </View>
  ) : (
    <View
      style={[styles.flex, {justifyContent: 'center', alignItems: 'center'}]}>
      <ActivityIndicator size={'large'} color={'red'} />
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
  bottomsheetimage: {
    position: 'absolute',
    top: '-9%',
    left: '50%',
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
  },
  bottomsheetInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    minHeight: wHeight * 0.2,
    paddingHorizontal: 10,
  },
  bottomSheetWraper: {
    height: wHeight / 2,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'space-evenly',
  },
  bottomSheetContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  doneButton: {
    width: '50%',
    alignSelf: 'center',
  },
  pageNationConitainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  responsibiltyText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  arrowRight: {
    width: 20,
    height: 10,
    marginRight: 10,
  },
});
