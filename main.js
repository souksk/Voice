import React, { Component,PropTypes } from 'react';
import { View, Text,SafeAreaView, StatusBar, StyleSheet } from 'react-native';
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
        <View style={{width:'100%',borderBottomWidth:1,borderBottomColor:'#5E8D48'}}>
          <Text style={styles.head}>MAIN PAGE</Text>
        </View>
        <SafeAreaView  style={{alignContent:"center",alignSelf:'center',alignItems:"center"}}>
          <Text style={{alignContent:"center",alignSelf:'center',alignItems:"center",paddingTop:50,fontSize:40}}> đây là trang chủ </Text>
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
  head:{
    fontSize:22,
    fontWeight:'bold',
    fontFamily:'times new roman',
    alignSelf:'center',
    padding:10,
    color:'#5E8D48'
  }
});