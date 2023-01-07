import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Round = ({props}) => {
  const {value} = props;
  return <View style={styles.circle}>{value && <Text>{value}</Text>}</View>;
};

export default Round;

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000033',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
});
