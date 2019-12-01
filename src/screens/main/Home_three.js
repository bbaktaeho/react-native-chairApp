import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Home_three extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Text>홈3</Text>
        </View>
      </React.Fragment>
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
