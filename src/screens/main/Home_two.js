import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Home_two extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>홈2</Text>
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
