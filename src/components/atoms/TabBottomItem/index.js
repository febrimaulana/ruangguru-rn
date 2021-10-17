import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Heading} from '..';
import {colors, fonts, hp} from '../../../constants';

const TabBottomItem = ({title, active, onPress, onLongPress}) => {
  const Icons = () => {
    if (title === 'Home') {
      return active ? (
        <Icon name="home" color={colors.white} size={hp(3.5)} />
      ) : (
        <Icon name="home-outline" color={colors.gray7} size={hp(3.5)} />
      );
    }
    if (title === 'Profile') {
      return active ? (
        <Icon name="person-circle" color={colors.white} size={hp(3.5)} />
      ) : (
        <Icon
          name="person-circle-outline"
          color={colors.gray7}
          size={hp(3.5)}
        />
      );
    }
    return <Icon name="home" color={colors.gray7} size={hp(4)} />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icons />
      <Heading
        title={title}
        color={active ? colors.white : colors.gray7}
        fontFamily={fonts.LatoBold}
        fontSize={hp(2)}
      />
    </TouchableOpacity>
  );
};

export default TabBottomItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
