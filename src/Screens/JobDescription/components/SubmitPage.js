import React, { memo } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {wWidth, wHeight, Button} from '../../../Component/StyledComponent';
let currenindex1;
const SubmitPage = ({onpress, onsubmit, currenindex, ...props}) => {
  currenindex1 = currenindex;
  return (
    <View style={[styles.bottomSheetWraper, {paddingHorizontal: 30}]}>
      <View style={styles.pageNationConitainer}>
        <Text style={[styles.pageNationField1]} onPress={onpress}>
          apply
        </Text>
        <Text style={styles.pageNationfield2}>done</Text>
      </View>

      <Text style={[styles.title]}>
        {''} Your job Application has been submitted sucessfully
      </Text>
      <Text style={[styles.greyColor]}>
        {''} Look out for other interesting job opening that matches your
        interest
      </Text>
      <Button onpress={onsubmit} label={'Done'} addstyles={styles.doneButton}/>
    </View>
  );
};
export default memo(SubmitPage);
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
    // alignSelf:'center'
  },
  pageNationField1: {
    height: 40,
    padding: 10,
    borderWidth: currenindex1 ? 2 : 0,
    margin: 2,
  },
  pageNationfield2: {
    height: 40,
    padding: 10,
    borderWidth: currenindex1 ? 0 : 2,
    borderColor: 'red',
  },
});
