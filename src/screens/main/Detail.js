import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MyHeader from "../../components/MyHeader";
import { Card } from "react-native-elements";

export default class Detail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <MyHeader
          navigation={this.props.navigation}
          title="세부정보"
        ></MyHeader>
        <View>
          <Text>세부정보</Text>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
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
