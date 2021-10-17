import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button, Gap, Header, Heading} from '../../components';
import {colors, fonts, hp, wp} from '../../constants';

const DetailOrder = ({navigation, route}) => {
  const {packageName, packageSerial, orderStatus, packageTag} = route.params;
  let prize;
  if (packageTag === 'englishacademy') {
    prize = 'Sepatu';
  } else if (packageTag === 'skillacademy') {
    prize = 'Tas';
  } else if (packageTag === 'ruangguru') {
    prize = 'Pensil';
  }

  return (
    <View style={styles.page}>
      <Header title="Detail Order" onPressBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentText}>
          <Heading title={packageTag} />
          <Heading title={packageSerial} />
        </View>
        <Gap height={hp(2)} />
        <View style={styles.contentText}>
          <Heading title="Kursus" />
          <Heading
            title={packageName}
            fontFamily={fonts.LatoBold}
            fontSize={hp(2.2)}
            textAlign="right"
            maxWidth={wp(55)}
          />
        </View>
        <Gap height={hp(1)} />
        <View style={styles.contentText}>
          <Heading title="Pembayaran" />
          <Heading
            title={orderStatus}
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
        <Heading
          title={`Terimakasih sudah membeli kursus ${packageName}, Selamat anda mendapatkan sebuah hadiah ${prize}. Silahkan klik tombol ambil hadiah`}
        />
        <Gap height={hp(3)} />
        <Button
          title="Ambil Hadiah"
          onPress={() => navigation.push('FormSubmit', route.params)}
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
