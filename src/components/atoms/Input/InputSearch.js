import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors, wp} from '../../../constants';

const InputSearch = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.conatinerInput} onPress={onPress}>
      <View style={styles.input} />
      <Icon name="search" size={wp(7)} color={colors.red} />
    </TouchableOpacity>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  conatinerInput: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.yellow,
    borderRadius: wp(2),
  },
  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: wp(2),
    borderBottomLeftRadius: wp(2),
  },
});
