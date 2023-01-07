import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopBar from '../Components/TopBar';
import InputBox from '../Components/InputBox';
import DropDown from '../Components/DropDown';
import Button from '../Components/Button';
import BottomNav from '../Components/BottomNav';
import {useNavigation} from '@react-navigation/native';
const Details = () => {
  const navigation = useNavigation();
  function onPress(parms) {
    console.log('ONPRESS Called');
    navigation.navigate('Details');
  }
  return (
    <View style={styles.main}>
      <View>
        <TopBar props={{id: null, title: 'Let’s Get Started'}} />
        <View style={styles.textbox}>
          <Text style={[styles.text, {fontSize: 18}]}>Just a few details…</Text>
          <Text style={[styles.text]}>
            We need to ﬁnd out a little bit more about you in order for us to
            help you ﬁnd your perfect debt solution.
          </Text>
        </View>

        {/* /////// */}
        <View style={styles.textbox}>
          <DropDown props={{title: 'Country of residence'}} />
          <DropDown props={{title: 'Main source of income'}} />
          <DropDown props={{title: 'Your living arrangements'}} />
          <DropDown props={{title: 'Main cause of ﬁnancial difficulties'}} />
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

export default Details;

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
