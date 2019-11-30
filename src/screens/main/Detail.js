import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../navigations/DrawerHeader";

export default class Detail extends Component {
  render() {
    return (
      <View>
        <Header></Header>
        <Text>세부정보</Text>
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
