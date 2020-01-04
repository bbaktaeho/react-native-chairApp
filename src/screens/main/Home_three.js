import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyHeader from "../../components/MyHeader";

export default class Home_three extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="홈 3"></MyHeader>
        <View style={styles.container}>
          <Text>홈3</Text>
        </View>
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
