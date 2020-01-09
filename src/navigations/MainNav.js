import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { Avatar, Button } from "react-native-elements";

import Detail from "../screens/main/Detail";
import SettingNav from "../navigations/SettingNav";
import HomeNav from "../navigations/HomeNav";
import Privacy from "../screens/auth/Privacy";
import Test1 from "../test/Test1";
import Test2 from "../test/Test2";

import { colors } from "../styles/styles";

const DrawerContent = props => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#ffffff",
          height: 140,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        {/* <Avatar
     size="xlarge" rounded
     onPress={() => props.navigation.navigate("Privacy")}
   containerStyle={{padding : 20}}
   source={require("../assets/Images/account.png")}
/> */}
        <Text style={{ paddingEnd: 50, fontSize: 20 }}>임 태호</Text>
      </View>
      <DrawerItems {...props} />
    </ScrollView>
  );
};

export default MainNav = createDrawerNavigator(
  {
    Home: {
      screen: HomeNav,
      navigationOptions: {
        drawerLabel: "홈"
        // drawerIcon: ({ tintColor }) => (
        //   <Image
        //     source={require("../assets/Images/home.png")}
        //     resizeMode="contain"
        //     style={{ width: 20, height: 20, tintColor: tintColor }}
        //   />
        // )
      }
    },
    Privacy: {
      screen: Privacy,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "내정보",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/Images/privarcy.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: tintColor }}
          />
        ),
        headerTitle: (
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text style={{ fontSize: 16, color: "black" }}>개인정보</Text>
          </View>
        ),
        headerStyle: {
          backgroundColor: colors.header
        }
      })
    },
    Setting: {
      screen: SettingNav,
      navigationOptions: {
        drawerLabel: "설정",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/Images/setting.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: tintColor }}
          />
        )
      }
    },
    Appinfo: {
      screen: Test2,
      navigationOptions: {
        drawerLabel: "앱정보",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/Images/info.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: tintColor }}
          />
        )
      }
    }
  },
  {
    hideStatusBar: true,
    intialRouteName: "Home",
    drawerBackgroundColor: "#ffffff", // 앱의 백그라운드 컬러와 맞추면 됨
    overlayColor: "#D8D8D8",
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#D8D8D8"
    }
  }
);
