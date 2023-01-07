import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import TopBar from '../Components/TopBar';
import InputBox from '../Components/InputBox';
import DropDown from '../Components/DropDown';
import Button from '../Components/Button';
import BottomNav from '../Components/BottomNav';
import {useNavigation} from '@react-navigation/native';
import Round from '../Components/Round';
const Code = () => {
  const [value, setValue] = React.useState('123');
  const navigation = useNavigation();
  const obj = {};
  function onPress(parms) {
    // console.log('ONPRESS Called');

    console.log(value[1], 'value');
    navigation.navigate('Details');
  }
  return (
    <View style={styles.main}>
      <View>
        <TopBar props={{id: 2, title: 'Registration'}} />
        <View style={styles.textbox}>
          <Text style={[styles.text, {fontSize: 18}]}>
            Please enter your registration{'\n'}code
          </Text>
          <Text style={[styles.text]}>
            You should have received a six digit code to the number you provided
            - this may take a few minutes to come through.
          </Text>
          <Text style={[styles.text]}>
            We do this to keep the information you{'\n'}
            provide us with secure.{'\n'}
          </Text>
          <View style={styles.inputTags}>
            <TextInput
              ref={value => setValue(value)}
              style={{display: 'none'}}
            />
            <Round props={{value: value[0]}} />
            <Round props={{value: value[1]}} />
            <Round props={{value: value[2]}} />
            <Round props={{value: value[3]}} />
            <Round props={{value: value[4]}} />
            <Round props={{value: value[5]}} />
          </View>
          <View style={styles.downText}>
            <Text style={[styles.text, {fontSize: 12}]}>
              Didn’t receive a text message?
            </Text>
            <TouchableOpacity
              onPress={() => {
                Alert.alert('Clicked');
              }}>
              <Text style={[styles.text, {textDecorationLine: 'underline'}]}>
                Resend code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{height: 150}}>
        <Button
          props={{
            color: '#ccccfc',
            bcolor: '#ccccfc',
            textcolor: '#FFFFFF',
            onPress,
            title: 'Next',
          }}
        />
        <BottomNav />
      </View>
    </View>
  );
};

export default Code;

const styles = StyleSheet.create({
  downText: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textbox: {
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
