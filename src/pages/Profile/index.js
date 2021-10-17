import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {ILDummyProfile} from '../../assets/ilustrasi';
import {Button, Gap, Heading, Image, ListProfile} from '../../components';
import {colors, fonts, hp, reducer, wp} from '../../constants';
import {RNAlert} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const {profile} = useSelector(state => state.profile);

  const onLogout = () => {
    dispatch({type: reducer.PROFILE, value: {}});
    dispatch({type: reducer.PACKAGES, value: []});
    dispatch({type: reducer.ISLOGIN, value: false});
    navigation.reset({
      index: 0,
      routes: [{name: 'Verifikasi'}],
    });
  };

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
        <Button
          title="Keluar"
          onPress={() => {
            RNAlert({
              title: 'Apa anda yakin ?',
              message: 'Kamu akan keluar dari aplikasi',
              button: [
                {text: 'Batal'},
                {text: 'OK', onPress: () => onLogout()},
              ],
            });
          }}
        />
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
