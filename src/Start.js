import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import App from "../src/App";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

class Screen1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>화면 1</Text>
      </View>
    );
  }
}

class Screen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>화면 2</Text>
      </View>
    );
  }
}

const BottomTab = createBottomTabNavigator({
  Screen1: { screen: Screen1 },
  Screen2: { screen: Screen2 },
  Bluetooth: { screen: App }
});
const Tabs = createAppContainer(BottomTab);

class Start extends React.Component {
  render() {
    return <Tabs></Tabs>;
  }
}

export default Start;
