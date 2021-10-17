import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {hp, wp} from '../../../constants';

const Banner = ({source}) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    marginRight: wp(3),
  },
  image: {
    width: wp(80),
    height: hp(18),
    borderRadius: wp(3),
  },
});
