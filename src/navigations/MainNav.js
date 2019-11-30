import React, { Component } from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import Home from "../screens/main/Home";
import Detail from "../screens/main/Detail";

export const MainNav = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerLabel: "홈"
      }
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        drawerLabel: "상세 정보"
      }
    }
  },
  {
    intialRouteName: "Home",
    hideStatusBar: false,
    drawerBackgroundColor: "rgba(255,255,255,.9)", // 앱의 백그라운드 컬러와 맞추면 됨
    overlayColor: "#6b52ae",
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#6b52ae"
    }
  }
);
