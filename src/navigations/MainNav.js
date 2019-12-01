import React, { Component } from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import { View } from "react-native";
import { Container, Header } from "native-base";

import Home from "../screens/main/Home";
import Detail from "../screens/main/Detail";
import { SettingNav } from "../navigations/SettingNav";

import { colors } from "../styles/styles";

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
    },
    Setting: {
      screen: SettingNav,
      navigationOptions: {
        drawerLabel: "설정"
      }
    }
  },
  {
    hideStatusBar: true,
    intialRouteName: "Home",
    drawerBackgroundColor: colors.drawerBackground, // 앱의 백그라운드 컬러와 맞추면 됨
    overlayColor: "#6b52ae",
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#6b52ae"
    }
  }
);
