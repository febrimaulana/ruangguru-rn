import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ILLogo} from '../../assets';
import {Image} from '../../components';
import {colors} from '../../constants';

const Splash = ({navigation}) => {
  const {isLogin} = useSelector(state => state.profile);
  useEffect(() => {
    setTimeout(() => {
      if (isLogin) {
        navigation.replace('MainApp');
      } else {
        navigation.replace('Verifikasi');
      }
    }, 3000);
  }, []);

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
