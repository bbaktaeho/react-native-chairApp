import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Notify extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>알림 설정</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
