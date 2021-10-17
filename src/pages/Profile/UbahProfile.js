import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {ILProfile} from '../../assets';
import {Button, Gap, Header, Input} from '../../components';
import {colors, hp, wp} from '../../constants';
import {showInfoPopop} from '../../utils/Message';

const UbahProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Ubah Profile" onPressBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LottieView source={ILProfile} autoPlay loop style={styles.ilustrasi} />
        <Input placeholder="Username" />
        <Gap height={hp(2)} />
        <Input placeholder="Email" />
        <Gap height={hp(2)} />
        <Input placeholder="Telepon" />
        <Gap height={hp(3)} />
        <Button
          title="Ubah"
          onPress={() =>
            showInfoPopop('Mohon maaf', 'Fitur ini belum tersedia')
          }
        />
      </ScrollView>
    </View>
  );
};

export default UbahProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: wp(3),
  },
  ilustrasi: {
    width: wp(60),
    height: hp(40),
    alignSelf: 'center',
  },
});
