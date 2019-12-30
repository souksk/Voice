//Main project test
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  AppRegistry,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import Voice from 'react-native-voice';
import Test from './routes';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      started: '',
      results: [],
      loading:false
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }
  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart(e) {
    this.setState({
      started: '√',
    });
  };

  onSpeechRecognized(e) {
    this.setState({
      recognized: '√',
    });
  };

  async onSpeechResults(e) {
  //  const data = e.value;
    //data.push(e.value)
    this.setState({
      results: e.value,
    });
   

 //   await Voice.destroy();
  }

  async _startRecognition(e) {
    try {
      this.setState({ results: []})
      console.log(this.state.results)
      this.setState({
        recognized: '',
      });
      this.setState({
        started: '',})
      await Voice.start('vi-VN');
    } catch (e) {
      console.error(e);
    }
  }
  async stop()
  {
    this.setState({loading:true});
    let data = this.state.results[0];
//console.log(data.match(/^(.*?(\bduoc\b)[^$]*)$/g));
    data = data.toLowerCase();
    data = data.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    data = data.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    data = data.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    data = data.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    data = data.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    data = data.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    data = data.replace(/đ/g,"d");
    data = data.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    data = data.replace(/ + /g," ");
    data = data.trim(); 
   //console.log(data)
   // console.log(data.match(/.+?(?=duoc)/g))
    let Stringdata= String(data);
    let hotendata = data.match(/.+?(?=duoc)/g)
    let hoten = String(hotendata)
    //console.log(data.match(/duoc.(.*)$/g))
    //var a = [];
    let a = data.match(/duoc.(.*)$/g);
    let b  = String(a)
    c =b.replace(/duoc/g,"");



    console.log(hoten)
    console.log(c)
    await Voice.destroy();
    
    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hoten: hoten,
        diem: c,
        data: Stringdata,
       
      }),
  };
  try {
    const uploadpost = await fetch('http://clickdev.tech:3000/point_insert',settings)
    const data = await uploadpost.json();
      if (data=="good") {
        this.setState({loading:false})
     
      } else {
        Alert.alert(data)
        this.setState({loading:false})
      }
    
  } catch (error) {
    Alert.alert(error)
  }
  }

  render() {
    return (
      <Test/>
       
    )
  }
}
const styles = StyleSheet.create({
  transcript: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
    top: '100%',
    marginTop:100,
  },
  btnStart:{
    height:100,
    width:100,
    justifyContent:'center',
    backgroundColor:'#bcfaac',
    textAlign:'center',
    alignSelf:'center',
    borderRadius:100/2,
  }
});
AppRegistry.registerComponent('Voice', () => Voice);
