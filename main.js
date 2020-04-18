import React, { Component, PropTypes } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image, Dimensions } from 'react-native';
var height = Dimensions.get('window').height;
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: require('./images/btghtu.jpg'),
    };
  }

  render() {
    return (
      <View>
        <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
        <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#5E8D48' }}>
          <Text style={styles.head}>Trang chủ</Text>
        </View>
        <SafeAreaView style={{ alignContent: "center", alignSelf: 'center', alignItems: "center" }}>
          <Text style={{ fontFamily:'times new roman' , fontSize:35, fontWeight:"bold",color:"blue"}}>Trường Đại học Hà Tĩnh</Text>
         <Text></Text>
          <Image source={this.state.image} style={{
            height: height * .8,  //its same to '20%' of device width
            aspectRatio: 1.5, // <-- this
            resizeMode: 'contain', //optional
          }} />
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
});