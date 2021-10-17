import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Banner1, Banner2, Banner3} from '../../assets';
import {Banner, Gap, Heading, List} from '../../components';
import {colors, fonts, hp, wp} from '../../constants';
import {useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const {profile, packages} = useSelector(state => state.profile);

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={hp(3)} />
        <Heading
          title={`Hai, ${profile.userName}`}
          fontFamily={fonts.LatoBold}
        />
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
        {packages.map(item => {
          return (
            <List
              title={item.packageName}
              orderStatus={item.orderStatus}
              packageSerial={item.packageSerial}
              packageTag={item.packageTag}
              onPress={() => navigation.push('DetailOrder', item)}
              key={item.packageSerial}
            />
          );
        })}
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
