import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";

import Detail from "../screens/main/Detail";
import SettingNav from "../navigations/SettingNav";
import HomeNav from "../navigations/HomeNav";
import Privacy from "../screens/auth/Privacy";

import { colors } from "../styles/styles";

const DrawerContent = props => (
  <ScrollView>
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
  </ScrollView>
);

export default MainNav = createDrawerNavigator(
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
    },
    Privacy: {
      screen: Privacy,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "개인정보",
        headerTitle: (
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text style={{ fontSize: 16, color: "black" }}>개인정보</Text>
          </View>
        ),
        headerStyle: {
          backgroundColor: colors.header
        }
      })
    }
  },
  {
    hideStatusBar: false,
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
