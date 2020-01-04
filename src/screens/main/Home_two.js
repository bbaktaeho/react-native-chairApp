import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MyHeader from "../../components/MyHeader";

export default class Home_two extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="홈 2"></MyHeader>
        <View style={styles.container}>
          <Text>홈2</Text>
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
