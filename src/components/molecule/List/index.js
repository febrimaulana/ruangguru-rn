import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Gap, Heading} from '../..';
import {colors, fonts, hp, wp} from '../../../constants';

const List = () => {
  return (
    <TouchableOpacity style={styles.conatiner}>
      <View>
        <Heading
          title="Mahir Berbahasa Inggris"
          fontFamily={fonts.LatoBlack}
          fontSize={hp(2.3)}
        />
        <Gap height={hp(0.6)} />
        <Heading title="SUCCESS" fontFamily={fonts.LatoBold} />
        <Gap height={hp(0.6)} />
        <Heading title="PKG-EQCB30RW" />
        <Heading title="#englishacademy" />
      </View>
      <Icon name="chevron-forward-outline" size={hp(3)} />
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  conatiner: {
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
