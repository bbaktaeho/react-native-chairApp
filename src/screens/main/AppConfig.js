import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Divider from "react-native-divider";
import MyHeader from "../../components/MyHeader";

export default class AppConfig extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="앱 정보"></MyHeader>
        <View style={styles.stycenter}>
          <Image
            source={require("../../assets/Images/chair_logo2.png")}
            style={{ width: 150, height: 150 }}
          />
          <Text style={styles.textcolor}>
            {"\n"}최신 버전을 사용 중 입니다.
          </Text>
          <Text>
            Ver.1.0.0{"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
        </View>
        <Divider>버전 정보</Divider>
        <View>
          <Text style={styles.s11}>{"\n"}Version.1.0.0</Text>
          <Text style={styles.s2}>
            {"\n"}로그인 버그 수정, 내 자세 예측 기능 추가.{"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
        </View>
        <Divider>의자소통 정보</Divider>
        <View>
          <Text style={styles.s2}>
            {"\n"}바른 자세를 유지하고 싶은 사용자들에게 도움을 주는 어플{"\n"}
            리케이션으로, 불량 자세를 감지하여 의자 진동이나 push알림{"\n"}
            으로 알려줍니다.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stycenter: {
    justifyContent: "center",
    alignItems: "center"
  },
  textcolor: {
    color: "silver"
  },
  s1: {
    marginLeft: 30,
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 16
  },
  s2: {
    marginLeft: 30,
    fontSize: 14
  },
  s11: {
    marginLeft: 30,
    fontWeight: "bold",
    fontSize: 16
  }
});
