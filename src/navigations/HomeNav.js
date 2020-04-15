import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import React from "react";

import Home_one from "../screens/main/Home_one";
import Home_two from "../screens/main/Home_two";
import Home_three from "../screens/main/Home_three";
import Icon from "react-native-vector-icons/FontAwesome5";

const HomeNav = createBottomTabNavigator(
  {
    내자세: { screen: Home_one },
    내의자: { screen: Home_two },
    예측: { screen: Home_three },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;

        if (routeName === "내자세") {
          iconName = "child";
        } else if (routeName === "내의자") {
          iconName = "chair";
        } else if (routeName === "예측") {
          iconName = "chart-line";
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: "#857562",
      inactiveTintColor: "#cfc1b0",
    },
  }
);

export default createAppContainer(HomeNav);
