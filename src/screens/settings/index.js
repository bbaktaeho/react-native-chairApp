import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { createIconSet } from "react-native-vector-icons";
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

export default class Sets extends Component {
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
          <Right></Right>
        </Header>
        <ScrollView>
          <Text>11</Text>
          <Text>22</Text>
        </ScrollView>
      </View>
    );
  }
}
