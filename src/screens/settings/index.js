import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";

import MainHeader from "../../components/MainHeader";

export default class Sets extends Component {
  render() {
    return (
      <View>
        <MainHeader openDrawer={this.props.navigation.openDrawer}></MainHeader>
        <ScrollView>
          <Text>11</Text>
          <Text>22</Text>
        </ScrollView>
      </View>
    );
  }
}
