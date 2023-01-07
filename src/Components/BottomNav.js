import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Back from '../assets/Back.svg';
import LiveChat from '../assets/LiveChat.svg';
import {useNavigation} from '@react-navigation/native';
const BottomNav = ({props}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.BotamNav}>
      <TouchableOpacity
        onPress={() => {
          try {
            if (props?.goBack == 'Home') Alert.alert('This is Home Screen ');
            else navigation.goBack();
          } catch (error) {
            console.log(error);
          }
        }}>
        <Back style={styles.logo} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Alert.alert('this is live chat button');
        }}>
        <LiveChat style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  logo: {
    width: 20,
    height: 20,
  },
  BotamNav: {
    backgroundColor: '#FFFFFF',
    height: 60,
    flexDirection: 'row',
    borderRadius: 50,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: 30,
    marginVertical: 20,
  },
});
