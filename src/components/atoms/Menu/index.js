import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Gap, Heading} from '..';
import {colors, fonts, hp, wp} from '../../../constants';

const Menu = ({
  icon,
  title,
  width,
  height,
  borderRadius,
  backgroundColor,
  borderWidth,
  borderColor,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={styles.content(
          width,
          height,
          borderRadius,
          backgroundColor,
          borderWidth,
          borderColor,
        )}>
        {icon}
      </View>
      <Gap height={hp(0.2)} />
      <Heading
        title={title}
        numberOfLines={1}
        center
        fontFamily={fonts.LatoLight}
        fontSize={hp(1.5)}
      />
    </TouchableOpacity>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(20),
  },
  content: (
    width,
    height,
    borderRadius,
    backgroundColor,
    borderWidth,
    borderColor,
  ) => ({
    backgroundColor: backgroundColor || colors.gray3,
    width: width || hp(7),
    height: height || hp(7),
    borderRadius: borderRadius || wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: borderWidth || 0,
    borderColor: borderColor || 'none',
  }),
});
