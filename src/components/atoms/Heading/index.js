import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors, fonts, hp} from '../../../constants';

const Heading = ({
  title,
  fontSize,
  color,
  numberOfLines = 0,
  fontFamily,
  center,
  textDecorationLine,
  textTransform,
  textAlign,
  maxWidth,
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={styles.text(
        fontSize,
        color,
        fontFamily,
        center,
        textDecorationLine,
        textTransform,
        textAlign,
        maxWidth,
      )}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  );
};

export default Heading;

const styles = StyleSheet.create({
  text: (
    fontSize,
    color,
    fontFamily,
    center,
    textDecorationLine,
    textTransform,
    textAlign,
    maxWidth,
  ) => ({
    fontSize: fontSize || hp(2),
    color: color || colors.black,
    fontFamily: fontFamily || fonts.LatoRegular,
    textAlign: center ? 'center' : textAlign ? textAlign : 'left',
    textDecorationLine: textDecorationLine ? textDecorationLine : 'none',
    textTransform: textTransform,
    maxWidth: maxWidth,
  }),
});
