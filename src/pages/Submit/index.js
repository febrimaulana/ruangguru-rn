import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {colors, fonts, hp, wp} from '../../constants';
import LottieView from 'lottie-react-native';
import {ILPhone} from '../../assets';
import {Button, Gap, Heading, Input} from '../../components';

const Submit = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={hp(3)} />
        <Heading
          title="Verivikasi Nomor Pengambilan"
          center
          fontFamily={fonts.LatoBold}
          fontSize={hp(3)}
        />
        <LottieView source={ILPhone} autoPlay loop style={styles.ilustrasi} />
        <Input placeholder="Masukkan nomor hp" keyboardType="number-pad" />
        <Gap height={hp(2)} />
        <Button title="Masuk" onPress={() => navigation.replace('MainApp')} />
      </ScrollView>
    </View>
  );
};

export default Submit;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: wp(4),
  },
  ilustrasi: {
    width: wp(60),
    height: hp(40),
    alignSelf: 'center',
  },
});
