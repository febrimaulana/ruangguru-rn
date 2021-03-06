import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {colors, fonts, wp} from '../../../constants';

const Input = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  multiline,
  numberOfLines,
  textAlignVertical,
  height,
  autoCapitalize,
  keyboardType,
  value,
}) => {
  return (
    <TextInput
      style={styles.input(height)}
      placeholder={placeholder}
      onChangeText={onChangeText}
      allowFontScaling={false}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={colors.gray}
      multiline={multiline}
      numberOfLines={numberOfLines}
      textAlignVertical={textAlignVertical}
      autoCapitalize={autoCapitalize || 'none'}
      keyboardType={keyboardType}
      value={value}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: height => ({
    borderRadius: wp(2),
    paddingHorizontal: wp(5),
    padding: wp(2.7),
    color: colors.black,
    fontFamily: fonts.LatoRegular,
    borderWidth: 1,
    borderColor: colors.gray7,
    height: height,
  }),
});
