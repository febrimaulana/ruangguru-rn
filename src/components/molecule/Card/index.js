import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Heading} from '../..';
import {colors, fonts, hp, wp} from '../../../constants';

const Card = ({name, phone, address, noted, prize, status}) => {
  return (
    <View style={styles.conatiner}>
      {name && (
        <View style={styles.contentText}>
          <Heading title="Nama Penerima" />
          <Heading
            title={name}
            fontFamily={fonts.LatoBold}
            maxWidth={wp(40)}
            textAlign="right"
          />
        </View>
      )}
      {phone && (
        <View style={styles.contentText}>
          <Heading title="Telpon" />
          <Heading
            title={phone}
            fontFamily={fonts.LatoBold}
            maxWidth={wp(40)}
            textAlign="right"
          />
        </View>
      )}
      {address && (
        <View style={styles.contentText}>
          <Heading title="Alamat" />
          <Heading
            title={address}
            fontFamily={fonts.LatoBold}
            maxWidth={wp(40)}
            textAlign="right"
          />
        </View>
      )}
      {noted !== null && noted !== undefined && noted !== '' && (
        <View style={styles.contentText}>
          <Heading title="Catatan" />
          <Heading
            title={noted}
            fontFamily={fonts.LatoBold}
            maxWidth={wp(40)}
            textAlign="right"
          />
        </View>
      )}
      {prize && (
        <View style={styles.contentText}>
          <Heading title="Hadiah" />
          <Heading
            title={prize}
            fontFamily={fonts.LatoBold}
            maxWidth={wp(40)}
            textAlign="right"
          />
        </View>
      )}
      {status && (
        <View style={styles.contentText}>
          <Heading title="status" />
          <Heading
            title={status}
            fontFamily={fonts.LatoBold}
            maxWidth={wp(40)}
            textAlign="right"
            color={colors.purple9}
            fontSize={hp(2.5)}
          />
        </View>
      )}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: wp(1),
    marginBottom: hp(2),
    borderRadius: wp(3),
    padding: wp(3),
  },
  contentText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(1),
  },
});
