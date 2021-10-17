import LottieView from 'lottie-react-native';
import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {ILProfile} from '../../assets';
import {Button, Gap, Header, Input} from '../../components';
import {colors, hp, wp} from '../../constants';
import {showInfoPopop} from '../../utils/Message';

const UbahProfile = ({navigation}) => {
  const {profile} = useSelector(state => state.profile);
  const [input, setInput] = useState(profile);

  console.log('====================================');
  console.log(input);
  console.log('====================================');

  return (
    <View style={styles.page}>
      <Header title="Ubah Profile" onPressBack={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LottieView source={ILProfile} autoPlay loop style={styles.ilustrasi} />
        <Input
          placeholder="Username"
          value={input.userName}
          onChangeText={value => setInput({...input, userName: value})}
        />
        <Gap height={hp(2)} />
        <Input
          placeholder="Email"
          value={input.userEmail}
          onChangeText={value => setInput({...input, userEmail: value})}
        />
        <Gap height={hp(2)} />
        <Input
          placeholder="Telepon"
          value={input.userPhoneNumber}
          onChangeText={value => setInput({...input, userPhoneNumber: value})}
        />
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
