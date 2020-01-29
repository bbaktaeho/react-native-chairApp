import React, { Component } from "react";
import { View, Text, ScrollView, Image, AsyncStorage } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { Avatar, Button } from "react-native-elements";

// import Detail from "../screens/main/Detail";
import SettingNav from "../navigations/SettingNav";
import HomeNav from "../navigations/HomeNav";
import Privacy from "../screens/auth/Privacy";
// import Test1 from "../test/Test1";
import AppConfig from "../screens/main/AppConfig";
import { colors } from "../styles/styles";

// 드로우 네비게이션 상단 컴포넌트(로그인 상태)
class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
    this.userName = "";
  }

  async componentWillMount() {
    try {
      const name = await AsyncStorage.getItem("user_name");
      if (name === null) this.userName = "비회원";
      else this.userName = name;
    } catch (e) {
      console.log(e.message);
    }
  }

  render() {
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
          <Avatar
            size="large"
            overlayContainerStyle={{ backgroundColor: "white" }}
            rounded
            onPress={() => this.props.navigation.navigate("Privacy")}
            containerStyle={{ padding: 20 }}
            source={require("../assets/Images/ex.png")}
          />
          <Text style={{ paddingRight: 130, fontSize: 23, color: "black" }}>
            {this.userName}
          </Text>
        </View>
        <DrawerItems {...this.props} />
      </ScrollView>
    );
  }
}

export default MainNav = createDrawerNavigator(
  {
    Home: {
      screen: HomeNav,

      navigationOptions: {
        drawerLabel: "홈",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/Images/home.png")}
            resizeMode="contain"
            style={{ width: 25, height: 25, tintColor: tintColor }}
          />
        )
      }
    },
    Privacy: {
      screen: Privacy,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "내 정보",

        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/Images/privarcy.png")}
            resizeMode="contain"
            style={{ width: 25, height: 25, tintColor: tintColor }}
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
            style={{ width: 25, height: 25, tintColor: tintColor }}
          />
        )
      }
    },
    Appinfo: {
      screen: AppConfig,
      navigationOptions: {
        drawerLabel: "앱 정보",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/Images/info.png")}
            resizeMode="contain"
            style={{ width: 25, height: 25, tintColor: tintColor }}
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
      labelStyle: { fontSize: 15 }
    }
  }
);
