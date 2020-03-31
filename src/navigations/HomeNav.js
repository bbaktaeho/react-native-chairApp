import { createBottomTabNavigator } from "react-navigation";
import React from "react";

import { Text } from "react-native";

import Home_one from "../screens/main/Home_one";
import Home_two from "../screens/main/Home_two";
import Home_three from "../screens/main/Home_three";

export default HomeNav = createBottomTabNavigator(
  {
    one: { screen: Home_one },
    two: { screen: Home_two },
    three: { screen: Home_three }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        if (routeName === "one") {
          return (
            <Text style={{ color: (focused && "#46c3ad") || "#888" }}>
              자세
            </Text>
          );
        } else if (routeName === "two") {
          return (
            <Text style={{ color: (focused && "#46c3ad") || "#888" }}>
              센서
            </Text>
          );
        } else if (routeName === "three") {
          return (
            <Text style={{ color: (focused && "#46c3ad") || "#888" }}>
              예측
            </Text>
          );
        }
      }
    }),
    lazy: false,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#46c3ad",
      inactiveTintColor: "#888"
    }
  }
);
