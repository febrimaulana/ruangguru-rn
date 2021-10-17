import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors, hp} from '../../../constants';

const TabBottomItem = ({title, active, onPress, onLongPress}) => {
  const Icons = () => {
    if (title === 'Home') {
      return active ? (
        <Icon name="home" color={colors.red} size={hp(5)} />
      ) : (
        <Icon name="home" color={colors.dustyGray} size={hp(5)} />
      );
    }
    if (title === 'Store') {
      return active ? (
        <Icon name="store" color={colors.red} size={hp(5)} />
      ) : (
        <Icon name="store" color={colors.dustyGray} size={hp(5)} />
      );
    }
    if (title === 'Account') {
      return active ? (
        <Icon name="person" color={colors.red} size={hp(5)} />
      ) : (
        <Icon name="person" color={colors.dustyGray} size={hp(5)} />
      );
    }

    if (title === 'Help') {
      return active ? (
        <Icon name="help" color={colors.red} size={hp(4)} />
      ) : (
        <Icon name="help" color={colors.dustyGray} size={hp(4)} />
      );
    }
    return <Icon name="home" color={colors.gray} size={hp(4)} />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icons />
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
