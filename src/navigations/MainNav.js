import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";

import Detail from "../screens/main/Detail";
import { SettingNav } from "../navigations/SettingNav";
import HomeNav from "../navigations/HomeNav";

import MyStatusBar from "../components/StatusBar";

import { colors } from "../styles/styles";

const DrawerContent = props => (
  <View>
    <View
      style={{
        backgroundColor: "#f50057",
        height: 140,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ color: "white", fontSize: 30 }}>의자소통</Text>
    </View>
    <DrawerItems {...props} />
  </View>
);

const Mainss = createDrawerNavigator(
  {
    Home: {
      screen: HomeNav,
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
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#6b52ae"
    }
  }
);

const Mains = createAppContainer(Mainss);

export default class MainNav extends Component {
  render() {
    return (
      <React.Fragment>
        <MyStatusBar></MyStatusBar>
        <Mains></Mains>
      </React.Fragment>
    );
  }
}
