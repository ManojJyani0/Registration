import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const InputBox = ({props}) => {
  // console.log(props)
  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        //   secureTextEntry={true}
        value={props.value}
        onChangeText={e => {
          props.onChange({
            [props.placeholder]: e,
          });
        }}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputBox: {
    height: 50,
    borderRadius: 25,
    // borderWidth: 1,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
    // alignItems:"center",
  },
  input: {
    fontSize: 16,
    fontFamily: 'Comfortaa-Regular',
    paddingLeft: 20,
  },
}); //#endregio
