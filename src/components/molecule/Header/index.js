import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, fonts, hp, wp} from '../../../constants';
import {ButtonIconOnly, Gap, Heading} from '../../atoms';

const Header = ({title, onPressBack}) => {
  return (
    <View style={styles.conatiner}>
      <ButtonIconOnly
        onPress={onPressBack}
        icon={
          <Icon name="arrow-back-outline" size={wp(7)} color={colors.black} />
        }
      />
      <Heading title={title} fontFamily={fonts.LatoBold} fontSize={hp(2.4)} />
      <Gap width={wp(6)} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: wp(3),
  },
});
