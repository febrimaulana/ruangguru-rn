import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Heading} from '../../../components';
import {imageUrl} from '../../../assets';
import {colors, fonts, hp, wp} from '../../../constants';

const Banner = ({onPress, height, width}) => {
  return (
    <TouchableOpacity style={styles.conatiner(height, width)} onPress={onPress}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.title}>
        <Heading
          title="Banner Promo"
          fontFamily={fonts.LatoBold}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Banner;

const styles = StyleSheet.create({
  conatiner: (height, width) => ({
    height: height || hp(15),
    width: width || wp(82),
    marginRight: wp(3),
    borderRadius: wp(3),
  }),
  image: {
    flex: 1,
    borderRadius: wp(3),
  },
  title: {
    top: hp(1.5),
    position: 'absolute',
    left: wp(3),
  },
});
