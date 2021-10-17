import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Image} from '../../components';
import {colors} from '../../constants';

const Splash = () => {
  return (
    <View style={styles.page}>
      <Image image={ILLogo} center />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
