import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, hp, wp} from '../../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const ListProfile = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{title}</Text>
      <Icon name="chevron-forward-outline" size={hp(2)} />
    </TouchableOpacity>
  );
};

export default ListProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: wp(1),
    marginBottom: hp(2),
    borderRadius: wp(3),
    padding: wp(3),
  },
});
