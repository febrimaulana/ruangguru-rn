import React, {Fragment} from 'react';
import {Picker} from '@react-native-picker/picker';
import {StyleSheet, View} from 'react-native';
import {colors, fonts, hp, wp} from '../../../constants';
import {Gap, Heading} from '..';

const InpuSelect = ({
  title,
  data = [],
  selectedValue,
  onValueChange,
  enabled,
}) => {
  return (
    <View>
      {title && (
        <Fragment>
          <Heading title={title} fontFamily={fonts.LatoBold} />
          <Gap height={hp(1)} />
        </Fragment>
      )}
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        mode="dropdown"
        enabled={enabled}
        itemStyle={styles.item}
        style={styles.input()}>
        {data.map((item, key) => {
          return (
            <Picker.Item label={item.label} value={item.value} key={key} />
          );
        })}
      </Picker>
    </View>
  );
};

export default InpuSelect;

const styles = StyleSheet.create({
  input: height => ({
    backgroundColor: colors.mercury,
    borderRadius: wp(2),
    paddingHorizontal: wp(5),
    padding: wp(3.5),
    color: colors.black,
    fontFamily: fonts.LatoLight,
    height: height,
  }),
});
