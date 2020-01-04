import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import MainHeader from "../../components/MainHeader";

export default class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
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
