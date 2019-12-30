import React, { Component } from 'react';
import { View, Text,SafeAreaView } from 'react-native';

export default class lienhe extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <SafeAreaView  style={{alignContent:"center",alignSelf:'center',alignItems:"center"}}>
        <Text style={{alignContent:"center",alignSelf:'center',alignItems:"center",paddingTop:50,fontSize:40}}> đây là Liên hệ </Text>
      </SafeAreaView>
    );
  }
}
