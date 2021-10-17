import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Heading, Input} from '../../components';
import {colors, hp, wp} from '../../constants';

const FormSubmit = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Form Klaim Hadiah"
        onPressBack={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Heading title="Pastikan form di bawah terisi dengan benar" />
        <Gap height={hp(2)} />
        <Input placeholder="Nama Penerima" />
        <Gap height={hp(2)} />
        <Input placeholder="Telpom Penerima" />
        <Gap height={hp(2)} />
        <Input placeholder="Telpon Lainnya Yang Dapat Dihubungi" />
        <Gap height={hp(2)} />
        <Input
          placeholder="Alamat"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
        <Gap height={hp(2)} />
        <Input
          placeholder="Catatan (opsional)"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
        <Gap height={hp(3)} />
        <Button title="Kirim" />
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
