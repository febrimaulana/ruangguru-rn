import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Heading, Input} from '../../components';
import {colors, hp, wp} from '../../constants';
import {klaimPrize} from '../../redux';
import {showErrorToas, showSuccessToas} from '../../utils';

const FormSubmit = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {profile} = useSelector(state => state.profile);
  const {loading} = useSelector(state => state.global);

  const [input, setInput] = useState({
    ...route.params,
    userId: profile.userId,
    email: profile.userEmail,
    name: null,
    phone: null,
    phoneOther: null,
    address: null,
    noted: null,
  });

  const onKirim = async () => {
    try {
      const result = await dispatch(klaimPrize(input));
      showSuccessToas('Success Klaim', result.message);
      navigation.reset({
        index: 0,
        routes: [{name: 'MainApp'}],
      });
    } catch (e) {
      showErrorToas('Gagal Klaim', e.message);
    }
  };

  return (
    <View style={styles.page}>
      <Header
        title="Form Klaim Hadiah"
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Heading title="Pastikan form di bawah terisi dengan benar" />
        <Gap height={hp(2)} />
        <Input
          placeholder="Nama Penerima"
          onChangeText={value => setInput({...input, name: value})}
        />
        <Gap height={hp(2)} />
        <Input
          placeholder="Telpon Penerima"
          onChangeText={value => setInput({...input, phone: value})}
          keyboardType="number-pad"
        />
        <Gap height={hp(2)} />
        <Input
          placeholder="Telpon Lainnya Yang Dapat Dihubungi"
          onChangeText={value => setInput({...input, phoneOther: value})}
          keyboardType="number-pad"
        />
        <Gap height={hp(2)} />
        <Input
          placeholder="Alamat"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          onChangeText={value => setInput({...input, address: value})}
        />
        <Gap height={hp(2)} />
        <Input
          placeholder="Catatan (opsional)"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          onChangeText={value => setInput({...input, noted: value})}
        />
        <Gap height={hp(3)} />
        <Button title="Kirim" onPress={onKirim} isLoading={loading} />
      </ScrollView>
    </View>
  );
};

export default FormSubmit;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: wp(3),
  },
});
