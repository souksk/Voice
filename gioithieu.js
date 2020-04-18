import React, { Component, PropTypes } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet, Image } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class gioithieu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('./images/btg1.jpg'),          // Local image
        require('./images/btg2.jpg'),          // Local image
        require('./images/btg3.jpg'),          // Local image
        require('./images/btg4.jpg'),          // Local image
      ]
    };
  }

  render() {
    return (
      <View>
        <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
        <View style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: '#5E8D48' }}>
          <Text style={styles.head}>Trang giới thiệu</Text>
        </View>
        <SliderBox images={this.state.images} />
        
        <SafeAreaView style={{ alignContent: "center", alignSelf: 'center', alignItems: "center" }}>
          <Text style={styles.body}>  👏🏻 Giới thiệu về Khoa Kỹ thuật - Công nghệ Trường Đại học Hà Tĩnh 🤝</Text>
          <Text style={styles.body}>   👉🏻 Là Khoa duy nhất đào tạo Kỹ sư trên địa bàn Tỉnh Hà Tĩnh với hai ngành Kỹ thuật xây dựng  và Công nghệ thông tin
          Chương trình đào tạo linh hoạt với 01 năm thực tập được hưởng lương tại các doanh nghiệp trong và ngoài nước.</Text>
          <Text style={styles.body}>   👉🏻 Chi phí học tập và sinh hoạt thấp nhất cả nước.</Text>
          <Text style={styles.body}>  👉🏻Có nhiều chính sách học bổng khuyến khích học tập, học bổng cho sinh viên nghèo vượt khó, học bổng của các Doanh nghiệp, Nhà tài trợ trong và ngoài nước.</Text>
          <Text style={styles.body}>  👉🏻 Là 1 trong “top” các trường đại học được Tập đoàn Vingroup hỗ trợ nhiều nhất trong công tác đào tạo và việc làm của sinh viên sau khi tốt nghiệp.</Text>
          <Text style={styles.body}>  👉🏻 Nằm trong top 10 ngành có cơ hội việc làm tốt nhất, có cơ hội làm việc lâu dài tại Nhật Bản, Hàn Quốc, Đài Loan theo diện kỹ sư với thu nhập cao.</Text>
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
    padding: 10,
    fontFamily: 'times new roman',
    fontSize: 16,
    alignContent: "flex-start",
    alignSelf: 'flex-start',
    alignItems: "flex-start",
    textAlign: "justify"
  }
});