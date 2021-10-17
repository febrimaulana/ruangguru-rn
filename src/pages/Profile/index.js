import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts, hp, wp} from '../../constants';
import {Gap, Heading, Image, ListProfile} from '../../components';
import {ILDummyProfile} from '../../assets/ilustrasi';

const Profile = () => {
  return (
    <View style={styles.page}>
      <Gap height={hp(2)} />
      <Image
        image={ILDummyProfile}
        center
        width={wp(30)}
        height={wp(30)}
        borderRadius={wp(30) / 2}
      />
      <Gap height={hp(1)} />
      <Heading title="Anugrah Aman" center fontFamily={fonts.LatoBlack} />
      <Gap height={hp(2)} />
      <ListProfile title="Ubah Profile" />
      <ListProfile title="Ubah Alamat" />
      <ListProfile title="Tentang Kami" />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: wp(3),
  },
});
