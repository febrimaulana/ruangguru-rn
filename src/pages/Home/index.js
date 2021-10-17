import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View, RefreshControl} from 'react-native';
import {Banner1, Banner2, Banner3} from '../../assets';
import {Banner, Gap, Heading, List, Card} from '../../components';
import {colors, fonts, hp, wp} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {findAllPrize} from '../../redux';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {profile, packages} = useSelector(state => state.profile);
  const {loading} = useSelector(state => state.global);
  const [data, setData] = useState([]);

  useEffect(() => {
    const findAll = async () => {
      try {
        const result = await dispatch(findAllPrize(profile.userId));
        setData(result);
      } catch (e) {
        showErrorToas('Oops', e.message);
      }
    };

    findAll();
  }, []);

  const onRefresh = async () => {
    try {
      const result = await dispatch(findAllPrize(profile.userId));
      setData(result);
    } catch (e) {
      showErrorToas('Oops', e.message);
    }
  };

  return (
    <View style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }>
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
        {data.length !== 0 && (
          <View>
            <Heading
              title="Status Klaim Hadiah"
              fontSize={hp(2.7)}
              fontFamily={fonts.LatoBold}
            />
            <Gap height={hp(2)} />
            {data.map(item => {
              console.log('====================================');
              console.log(item);
              console.log('====================================');
              return (
                <Card
                  key={item.id}
                  name={item.name}
                  address={item.address}
                  noted={item.noted}
                  phone={item.phone}
                  prize={item.prize}
                  status={item.status}
                />
              );
            })}
          </View>
        )}
        <Gap height={hp(2)} />
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
