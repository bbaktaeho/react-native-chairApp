import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import Pos from "./Pos";
export default class First_pos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  map1(x) {
    return 255 - ((x - 0) * (255 - 0)) / (1000 - 0) + 0;
  }

  map2(x) {
    return 255 - ((x - 0) * (255 - 0)) / (400 - 0) + 0;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Pos> </Pos>
        <Button
          onPress={() => this.props.navigation.navigate("MainNav")}
        ></Button>
      </View>
    );
  }
}
