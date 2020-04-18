import React, { Component, PropTypes } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image, Linking } from 'react-native';
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class lienhe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: require('./images/ktcn.jpg'),
    };
  }

  render() {
    return (
      <View>
        <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
        <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#5E8D48' }}>
          <Text style={styles.head}>Trang liên hệ</Text>
        </View>
        <SafeAreaView style={{
          alignContent: "center", alignSelf: 'center', alignItems: "center", fontFamily: 'times new roman',
        }}>
          <Text></Text>
          <Image source={this.state.image} style={{ width: 400, height: 250 }} />
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text style={styles.title}> Liên hệ : Khoa kỹ thuật công nghệ</Text>
          <Text></Text>

          <Text style={styles.body}> Tầng 4 dãy nhà A5, CSM, Trường Đại học Hà Tĩnh</Text>
          <Text style={styles.body} > Điện thoại: 0912-442-405 | 0964-264-073</Text>
          <Text style={styles.body}> Email: khoakt-cn@hu.edu.vn</Text>
          <Text style={styles.body} onPress={() => { Linking.openURL('http://ent.htu.edu.vn/') }} > Web: http://ent.htu.edu.vn/</Text>
        </SafeAreaView>
      </View>
    );
  }
}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight;
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  head: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'times new roman',
    alignSelf: 'center',
    padding: 10,
    color: '#5E8D48'
  },
  title: {
    fontFamily: 'times new roman',
    fontSize: 20,


  }
  ,
  body: {
    fontFamily: 'times new roman',
    fontSize: 18,
    alignContent: "flex-start",
    alignSelf: 'flex-start',
    alignItems: "flex-start",
  }
});
