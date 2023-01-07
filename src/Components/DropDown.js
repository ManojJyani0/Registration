import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
const DropDown = ({props}) => {
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: 'Social Media', disabled: false},
    {key: '2', value: 'Friends', disabled: false},
    {key: '3', value: 'Advertisement', disabled: false},
  ];
  return (
    <SelectList
      setSelected={val => setSelected(val)}
      data={data}
      save="value"
      placeholder="Where did you hear about us?"
      defaultOption={{
        key: '1',
        value: props?.title,
      }}
      boxStyles={styles.DropDown}
      fontFamily="Comfortaa-Regular"
      dropdownTextStyles={{fontSize: 14}}
    />
  );
};

export default DropDown;

const styles = StyleSheet.create({
  DropDown: {
    borderRadius: 50,
    borderWidth: 0,
    backgroundColor: '#FFFFFF',
    height: 50,
    alignItems: 'center',
    marginVertical: 10,
    fontSize: 14,
    color: '#000033',
  },
});
