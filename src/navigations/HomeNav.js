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
        let icon = "▲";

        if (routeName === "one") {
          icon = "🌈";
        } else if (routeName === "two") {
          icon = "🌙";
        }

        // can use react-native-vector-icons
        // <Icon name={iconName} size={iconSize} color={iconColor} />
        return (
          <Text style={{ color: (focused && "#46c3ad") || "#888" }}>
            {icon}
          </Text>
        );
      }
    }),
    lazy: false,
    tabBarOptions: {
      activeTintColor: "#46c3ad",
      inactiveTintColor: "#888"
    }
  }
);
