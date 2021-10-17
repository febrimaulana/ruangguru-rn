import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button, Gap, Header, Heading} from '../../components';
import {colors, fonts, hp, wp} from '../../constants';

const DetailOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Detail Order" onPressBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentText}>
          <Heading title="#englishacademy" />
          <Heading title="PKG-EQCB30RW" />
        </View>
        <Gap height={hp(2)} />
        <View style={styles.contentText}>
          <Heading title="Kursus" />
          <Heading
            title="Mahir Berbahasa Inggris"
            fontFamily={fonts.LatoBold}
            fontSize={hp(2.2)}
          />
        </View>
        <View style={styles.contentText}>
          <Heading title="Pembayaran" />
          <Heading
            title="SUCCESS"
            fontFamily={fonts.LatoBold}
            fontSize={hp(2.2)}
          />
        </View>
        <Gap height={hp(2)} />
        <Heading
          title="Deskripsi"
          fontFamily={fonts.LatoBold}
          fontSize={hp(2.2)}
        />
        <Heading title="Terimakasih sudah membeli kursus bahasa inggris, Selamat anda mendapatkan sebuah hadiah Tas. Silahkan klik tombol ambil hadiah" />
        <Gap height={hp(3)} />
        <Button
          title="Ambil Hadiah"
          onPress={() => navigation.push('FormSubmit')}
        />
      </ScrollView>
    </View>
  );
};

export default DetailOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: wp(3),
  },
  contentText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
