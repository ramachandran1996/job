import React, {memo, useMemo, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {wWidth, wHeight, Button} from '../../../Component/StyledComponent';
const ApplyPage = ({onpress, ...props}) => {
  const [textValue, setTextValue] = useState('');
  return (
    <View style={styles.bottomSheetWraper}>
      <View style={styles.bottomsheetimage}>
        <Image
          source={require('../../../../assets/driver_photo.jpg')}
          style={styles.image}
        />
      </View>
      <Text style={[styles.title, {textAlign: 'center'}]}>
        Personalize your application send it to selena gomez{' '}
      </Text>
      <View style={styles.bottomsheetInput}>
        <TextInput
          maxLength={150}
          multiline={true}
          placeholder={'Add your Notes here'}
          onChangeText={(value) => {
            setTextValue(value);
          }}
          value={textValue}
        />
        <Text style={styles.inputfieldnumber}>{textValue.length}/150</Text>
      </View>

      <Button label={'Send Apllication'} onpress={onpress} />
    </View>
  );
};
export default memo(ApplyPage);
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
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
  button: {
    height: 50,
    width: '100%',
    marginTop: 5,
    backgroundColor: '#292BB0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
  inputfieldnumber: {
    position: 'absolute',
    right: 10,
    bottom: 5,
  },
});
