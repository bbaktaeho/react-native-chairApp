import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import React from "react";

import Home_one from "../screens/main/Home_one";
import Home_two from "../screens/main/Home_two";
import Home_three from "../screens/main/Home_three";
import Home_four from "../screens/main/Home_four";
import Icon from "react-native-vector-icons/EvilIcons";

const HomeNav = createBottomTabNavigator(
  {
    내자세: { screen: Home_one },
    내의자: { screen: Home_two },
    내정보: { screen: Home_three },
    더보기: { screen: Home_four },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;

        if (routeName === "내자세") {
          iconName = "heart";
        } else if (routeName === "내의자") {
          iconName = "archive";
        } else if (routeName === "내정보") {
          iconName = "exclamation";
        } else if (routeName === "더보기") {
          iconName = "heart";
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: "#695c4c",
      inactiveTintColor: "#d3d3d3",
    },
  }
);

export default createAppContainer(HomeNav);
