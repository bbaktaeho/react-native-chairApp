import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import MyHeader from "../../components/MyHeader";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default class Home_four extends React.PureComponent {
  state = {
    list: [
      {
        name: "개인 정보 수정",
      },
      {
        name: "회원 탈퇴",
      },
      {
        name: "로그아웃",
      },
    ],
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="더보기"></MyHeader>

        <ScrollView></ScrollView>
      </View>
    );
  }
}
