import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Banner1, Banner2, Banner3} from '../../assets';
import {Banner, Gap, Heading, List} from '../../components';
import {colors, fonts, hp, wp} from '../../constants';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={hp(3)} />
        <Heading title="Hi, Anugrah Aman" fontFamily={fonts.LatoBold} />
        <Gap height={hp(2)} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Banner source={Banner2} />
          <Banner source={Banner1} />
          <Banner source={Banner3} />
        </ScrollView>
        <Gap height={hp(2)} />
        <Heading
          title="List Order Kamu"
          fontSize={hp(2.7)}
          fontFamily={fonts.LatoBold}
        />
        <Gap height={hp(2)} />
        <List />
        <List />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: wp(3),
  },
});
