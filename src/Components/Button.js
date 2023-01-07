import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Button = ({props}) => {
  const {color, bcolor, textcolor, onPress, title} = props;
  return (
    <TouchableOpacity
      style={[{backgroundColor: color, borderColor: bcolor}, styles.Button]}
      onPress={onPress}
      enabled={false}>
      <Text style={[styles.text, {color: textcolor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  Button: {
    height: 50,
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 30,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Comfortaa-SemiBold',
  },
});
