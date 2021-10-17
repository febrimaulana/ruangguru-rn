import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {colors, fonts, hp, reducer, wp} from '../../constants';
import LottieView from 'lottie-react-native';
import {ILPhone} from '../../assets';
import {Button, Gap, Heading, Input} from '../../components';
import {showErrorToas} from '../../utils';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {verifikasiPhone} from '../../redux';

const Verifikasi = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.global);
  const [phone, setPhone] = useState('');

  const onMasuk = async () => {
    try {
      const result = await dispatch(verifikasiPhone({phone: phone}));
      dispatch({type: reducer.PROFILE, value: result.user});
      dispatch({type: reducer.PACKAGES, value: result.packages});
      dispatch({type: reducer.ISLOGIN, value: true});
      navigation.replace('MainApp');
    } catch (e) {
      showErrorToas('Gagal Verifikasi', e.message);
    }
  };

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={hp(3)} />
        <Heading
          title="Verifikasi Nomor Pengambilan"
          center
          fontFamily={fonts.LatoBold}
          fontSize={hp(3)}
        />
        <LottieView source={ILPhone} autoPlay loop style={styles.ilustrasi} />
        <Input
          placeholder="Masukkan nomor hp"
          keyboardType="number-pad"
          onChangeText={value => setPhone(value)}
        />
        <Gap height={hp(2)} />
        <Button title="Masuk" onPress={onMasuk} isLoading={loading} />
      </ScrollView>
    </View>
  );
};

export default Verifikasi;

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
