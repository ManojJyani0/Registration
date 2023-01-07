import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const TopBar = ({props}) => {
  const {height} = useWindowDimensions();
  console.log(props);
  const {id, title} = props ?? {id: 1, title: ''};
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#000033', '#79F7F7', '#57F9F9']}
      style={[styles.outer, {height: height / 6}]}>
      <View style={styles.inner}>
        <Text style={styles.heading}>{title}</Text>
        {id && (
          <View style={{flexDirection: 'row'}}>
            <View
              style={[
                styles.round,
                {backgroundColor: id != 1 ? 'gray' : '#57F9F9'},
              ]}></View>
            {/* {(id = true)} */}
            <View
              style={[
                styles.round,
                {backgroundColor: id != 2 ? 'gray' : '#57F9F9'},
              ]}></View>
            <View
              style={[
                styles.round,
                {backgroundColor: id != 3 ? 'gray' : '#57F9F9'},
              ]}></View>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  heading: {
    color: '#57F9F9',
    fontFamily: 'Comfortaa-SemiBold',
    fontSize: 30,
  },
  inner: {
    padding: 10,
    width: '100%',
    height: '95%',
    backgroundColor: '#000033',
    borderBottomRightRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outer: {
    width: '100%',
    height: '20%',
    borderBottomRightRadius: 60,
  },
  round: {
    height: 10,
    width: 10,
    borderRadius: 100,
    borderColor: 'gray',
    backgroundColor: 'gary',
    margin: 3,
  },
});
