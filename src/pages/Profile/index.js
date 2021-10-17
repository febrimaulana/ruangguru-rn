import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {ILDummyProfile} from '../../assets/ilustrasi';
import {Button, Gap, Heading, Image, ListProfile} from '../../components';
import {colors, fonts, hp, wp} from '../../constants';
import {useSelector} from 'react-redux';

const Profile = ({navigation}) => {
  const {profile} = useSelector(state => state.profile);

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
      <Heading title={profile.userName} center fontFamily={fonts.LatoBlack} />
      <Gap height={hp(2)} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ListProfile
          title="Ubah Profile"
          onPress={() => navigation.push('UbahProfile')}
        />
        <ListProfile
          title="Tentang Kami"
          onPress={() => navigation.push('TentangKami')}
        />
        <Button title="Keluar" />
      </ScrollView>
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
