import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Bluetooth extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>블루투스 설정</Text>
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
