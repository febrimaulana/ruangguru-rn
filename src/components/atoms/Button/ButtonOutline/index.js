import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {colors, fonts, hp} from '../../../../constants';
import Gap from '../../Gap';
import Heading from '../../Heading';

const ButtonOutline = ({
  title,
  onPress,
  onLongPress,
  textColor,
  borderColor,
  disabled,
  rigthComponent,
  leftComponent,
  fontSize,
  fontFamily,
  noRadius,
  spaceRight,
  spaceLeft,
  isLoading,
  textTransform,
}) => {
  if (isLoading) {
    return (
      <View
        style={{
          ...styles.button(borderColor, noRadius),
          ...styles.loading,
        }}>
        <ActivityIndicator size="small" color={colors.red} />
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={styles.button(borderColor, noRadius)}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}>
      {leftComponent ? leftComponent : <Gap />}
      {spaceLeft && <Gap width={spaceLeft} />}
      <Heading
        title={title}
        color={textColor ? textColor : colors.border}
        fontSize={fontSize}
        fontFamily={fontFamily || fonts.LatoBold}
        textTransform={textTransform}
      />
      {spaceRight && <Gap width={spaceRight} />}
      {rigthComponent ? rigthComponent : <Gap />}
    </TouchableOpacity>
  );
};

export default ButtonOutline;

const styles = StyleSheet.create({
  button: (borderColor, noRadius) => ({
    borderWidth: 1,
    borderColor: borderColor || colors.border,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: hp(1),
    borderRadius: noRadius ? 0 : 10,
    flexDirection: 'row',
  }),
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
