import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import TopBar from '../Components/TopBar';
import InputBox from '../Components/InputBox';
import DropDown from '../Components/DropDown';
import Button from '../Components/Button';
import BottomNav from '../Components/BottomNav';
import {useNavigation} from '@react-navigation/native';
const Wellcome = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = React.useState({});
  function onChange(params) {
    //userData handled my this function and stored in userData state.
    console.log('onChange');
  }
  function onPress(parms) {
    // console.log('ONPRESS Called');
    console.log(userData);
    navigation.navigate('Code');
  }
  return (
    <View style={styles.main}>
      <View>
        <TopBar props={{id: 1, title: 'Registration'}} />
        <View style={styles.textbox}>
          <Text
            style={[
              styles.text,
              {fontSize: 18, fontFamily: 'Comfortaa-SemiBold'},
            ]}>
            Welcome to Loochi!
          </Text>
          <Text style={[styles.text]}>
            You’re now on your way to a debt free future. Let’s get started!
          </Text>
          <Text style={[styles.text]}>
            Don’t worry - we keep all of your data safe.
          </Text>
        </View>
        <View style={styles.inputTags}>
          <InputBox
            props={{placeholder: 'First name', onChange, value: null}}
          />
          <InputBox props={{placeholder: 'Last name', onChange, value: null}} />
          <InputBox
            props={{placeholder: 'Email address', onChange, value: null}}
          />
          <InputBox
            props={{placeholder: 'Phone number', onChange, value: null}}
          />
          <DropDown props={{title: 'Where did you hear about us?'}} />
        </View>
      </View>
      <View style={{height: 150}}>
        <Button
          props={{
            color: '#bebec2',
            bcolor: '#ccccfc',
            textcolor: '#FFFFFF',
            onPress,
            title: 'Next',
          }}
        />
        <BottomNav props={{goBack: 'Home'}} />
      </View>
    </View>
  );
};

export default Wellcome;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '	#F5F5F5',
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Comfortaa-Regular',
    color: '#000033',
    fontSize: 14,
  },
  inputTags: {
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  textbox: {
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
