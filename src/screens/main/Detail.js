import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import {
  Header,
  Content,
  Container,
  Left,
  Button,
  Icon,
  Body,
  Right
} from "native-base";

import { colors } from "../../styles/styles";

export default class Detail extends Component {
  render() {
    return (
      <View>
        <Header style={{ backgroundColor: colors.header }}>
          <Left>
            <TouchableOpacity onPress={this.props.navigation.openDrawer}>
              <Image
                source={require("../../assets/Images/menu.png")}
                style={{ width: 25, height: 25 }}
              ></Image>
            </TouchableOpacity>
          </Left>
          <Body></Body>
        </Header>
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
