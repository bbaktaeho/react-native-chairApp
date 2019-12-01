import React from "react";
import { StatusBar } from "react-native";
import { colors } from "../styles/styles";

export default class MyStatusBar extends React.Component {
  render() {
    return (
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.statusbar}
        // translucent={true}
      ></StatusBar>
    );
  }
}
