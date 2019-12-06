//Main project
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  AppRegistry,
} from 'react-native';
import Voice from 'react-native-voice';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: '',
      started: '',
      results: [],
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

  onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
  }

  async _startRecognition(e) {
    this.setState({
      recognized: '',
      started: '',
      results: [],
    });
    try {
      await Voice.start('vi-VN');
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.transcript}>
            Transcript
        </Text>
        {this.state.results.map((result, index) => <Text style={styles.transcript}> {result}</Text>
        )}
        <View style={styles.btnStart}>
          <Button style={styles.transcript}
          onPress={this._startRecognition.bind(this)}
          title="Start"></Button>
        </View>
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