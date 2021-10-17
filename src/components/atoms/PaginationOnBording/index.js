import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors, hp, wp} from '../../../constants';

const PaginationOnBording = ({active, count}) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push(i);
  }

  return (
    <View style={styles.container}>
      {data.map((result, index) => {
        return (
          <View key={index}>
            <View style={styles.line(result === active)} />
          </View>
        );
      })}
    </View>
  );
};

export default PaginationOnBording;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: active => ({
    width: active ? hp(3) : hp(3),
    height: active ? hp(3) : hp(3),
    borderRadius: active ? hp(3) / 2 : hp(3) / 2,
    backgroundColor: active ? colors.red : colors.red2,
    marginHorizontal: wp(1),
  }),
});
