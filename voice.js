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
  Alert,
  SafeAreaView
} from 'react-native';
import Voice from 'react-native-voice';
import Routes from './routes';
export default class voice extends Component {
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

  //  this.setState({loading:true});
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
     // let Stringdata= String(data);
      let filterlienhe = data.match(/(^.*\slien$)|(^lien\s.*)|(^lien$)|(^.*\slien\s.*$)/g)
      let filtermain = data.match(/(^.*\schu$)|(^chu\s.*)|(^chu$)|(^.*\schu\s.*$)/g)
      let filtergth = data.match(/(^.*\sthieu$)|(^thieu\s.*)|(^thieu$)|(^.*\sthieu\s.*$)/g)
    
      //let hoten = String(hotendata)
      //console.log(data.match(/duoc.(.*)$/g))
      //var a = [];
      let a = data.match(/duoc.(.*)$/g);
      let b  = String(a)
      c =b.replace(/duoc/g,"");
    if(filterlienhe!== null)
    {
        this.props.navigation.navigate('lienHe')
        console.log(filterlienhe+" lienhe")
    }
    else
    {
        if(filtermain!==null)
        {
            this.props.navigation.navigate('main')
            console.log(filtermain+" main")
        }
        else
        {
            if(filtergth!==null)
            {
                this.props.navigation.navigate('gioithieu')
                console.log(filtergth+" gth")
            }
        }
    }
    
  
      //console.log(c)
   

 //   await Voice.destroy();
  }

  async _startRecognition(e) {
    await Voice.destroy();
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
    await Voice.destroy();
    this.setState({ results: []})
  }

  render() {
    return (
      <View>
        <Text style={styles.transcript}>
            Transcript
        </Text>
       <Text style={styles.transcript}> {this.state.results.map(data=>(data))}</Text>
        <View style={styles.btnStart}>
          <Button style={styles.transcript}
          onPress={this._startRecognition.bind(this)}
          title="Start"></Button>
           
        </View>
        <TouchableOpacity style={{textAlign:'center',alignItems:"center",alignContent:"center"}}
  onPress={()=>this.stop()}><Text>{this.state.loading? <ActivityIndicator size="large" color="#0000ff" />:"clear"}</Text></TouchableOpacity>
      </View>
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
