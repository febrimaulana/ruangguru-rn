import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {colors, wp} from '../../constants';
import {Header} from '../../components';

const TentangKami = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Tentang Kami" onPressBack={() => navigation.goBack()} />
      <WebView
        source={{
          uri: 'https://www.ruangguru.com/about-us#:~:text=Ruangguru%20merupakan%20perusahaan%20teknologi%20terbesar,lebih%20dari%20100%20bidang%20pelajaran.',
        }}
        style={styles.webView}
      />
    </View>
  );
};

export default TentangKami;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: wp(3),
  },
  webView: {
    flex: 1,
  },
});
