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
  StatusBar,
  SafeAreaView,
  ListView
} from 'react-native';
import Voice from 'react-native-voice';
import Routes from './routes';

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor="transparent" />
  </View>
);

export default class voice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      started: '',
      results: [],
      loading: false
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
    data = data.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    data = data.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    data = data.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    data = data.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    data = data.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    data = data.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    data = data.replace(/đ/g, "d");
    data = data.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    data = data.replace(/ + /g, " ");
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
    let b = String(a)
    c = b.replace(/duoc/g, "");
    if (filterlienhe !== null) {
      this.props.navigation.navigate('lienHe')
      console.log(filterlienhe + " lienhe")
    }
    else {
      if (filtermain !== null) {
        this.props.navigation.navigate('main')
        console.log(filtermain + " main")
      }
      else {
        if (filtergth !== null) {
          this.props.navigation.navigate('gioithieu')
          console.log(filtergth + " gth")
        }
      }
    }


    //console.log(c)


    //   await Voice.destroy();
  }

  async _startRecognition(e) {
    await Voice.destroy();
    try {
      this.setState({ results: [] })
      console.log(this.state.results)
      this.setState({
        recognized: '',
      });
      this.setState({
        started: '',
      })
      await Voice.start('vi-VN');
    } catch (e) {
      console.error(e);
    }
  }
  async stop() {
    await Voice.destroy();
    this.setState({ results: [] })
  }

  render() {
    return (
      <View>
        <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
        <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#5E8D48' }}>
          <Text style={styles.head}>Nhận Giọng nói</Text>
        </View>

        {/* <Text style={styles.transcript1}>  {this.state.results.map(data => (data))}</Text> */}
        <View style={styles.transcript2}><Text style={styles.transcript1}> {this.state.results.map(data => (data))}</Text></View>
      
        <Text style={styles.transcript}>
          1.  Nói "Trang chủ" để chuyển sang 👉🏻 trang chủ
        </Text>
        <Text style={styles.transcript}>
          2.  Nói "Giới thiệu" để chuyển sang 👉🏻 trang Giới thiệu
        </Text>
        <Text style={styles.transcript}>
          3.  Nói "Liên hệ""để chuyển sang 👉🏻 trang Liên hệ
        </Text>


        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

          <View style={styles.btnStart}>
            <TouchableOpacity style={{ textAlign: 'center', alignItems: "center", alignContent: "center" }}
              onPress={this._startRecognition.bind(this)}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#694fad' }}>Start</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btncc}>
            <TouchableOpacity style={{ textAlign: 'center', alignItems: "center", alignContent: "center" }}
              onPress={() => this.stop()}><Text style={{ fontSize: 18, fontWeight: 'bold', color: '#f79295' }}>{this.state.loading ? <ActivityIndicator size="large" color="#0000ff" /> : "Clear"}</Text></TouchableOpacity>
          </View>

        </View>
      </View>

    )
  }
}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight;
const styles = StyleSheet.create({
  transcript: {
    textAlign: 'center',
    color: 'blue',
    top: '100%',
    textAlign: "justify",
    paddingLeft: 10,
    fontFamily:'times new roman',
    fontSize:16
  },
  transcript1: {
    textAlign: 'center',
    alignItems:'center',
    alignContent:'center',
    color: 'black',
    fontSize: 20,
    fontFamily: 'times new roman',
    textAlign: "justify",
    margin:5
  },
  transcript2: {
    marginLeft:20,
    textAlign: 'center',
    alignItems:'center',
    alignContent:'center',
    color: 'black',
    top: '80%',
    fontSize: 25,
    fontFamily: 'times new roman',
    backgroundColor:'red',
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
    width:"90%",
    height:150,
    backgroundColor:"white",
    borderRadius:15,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  btnStart: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    backgroundColor: '#bcfaac',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 100 / 2,
  },
  btncc: {
    height: 98,
    width: 98,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#f79295',
    borderWidth: 4,
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 100 / 2,
    margin: 10
  },
  head: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'times new roman',
    alignSelf: 'center',
    padding: 10,
    color: '#5E8D48'
  }
});
AppRegistry.registerComponent('Voice', () => Voice);
