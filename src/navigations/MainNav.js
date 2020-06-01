import React from "react";
import { View, Text, AsyncStorage } from "react-native";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { Avatar, Icon } from "react-native-elements";

import HomeNav from "../navigations/HomeNav";
import Posture from "../screens/main/Posture";
import PostureSwiper from "../screens/main/PostureSwiper";
import StatNav from "../navigations/StatNav";
import Fetch from "../components/Fetch";
import URL from "../NET";

class DrawerContent extends React.Component {
  state = {
    username: "",
  };

  requestInfo = async () => {
    const token = await AsyncStorage.getItem("token");

    if (token == null) {
      this.setState({ username: "비회원" });
    } else {
      const res = await Fetch(URL.account, "GET", null, token);
      const body = JSON.parse(res._bodyText);
      if (body.success) {
        this.setState({ username: body.user.name });
      } else {
        console.log("fetch error");
      }
    }
  };

  componentWillMount() {
    this.requestInfo();
  }

  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: "#ffffff",
            height: 140,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Avatar
            size="small"
            rounded
            icon={{ name: "user", type: "antdesign" }}
            overlayContainerStyle={{ backgroundColor: "#695c4c" }}
            containerStyle={{ marginLeft: 15, marginTop: 10 }}
          />
          <Text
            style={{
              paddingLeft: 15,
              fontSize: 23,
              color: "#695c4c",
              fontWeight: "bold",
            }}
          >
            {this.state.username}
          </Text>
        </View>
        <DrawerItems {...this.props} />
      </View>
    );
  }
}

export default MainNav = createDrawerNavigator(
  {
    Home: {
      screen: HomeNav,
      navigationOptions: {
        drawerLabel: "홈",
        drawerIcon: () => (
          <Icon name="home" size={25} type="antdesign" color="#544e48" />
        ),
      },
    },

    Stat: {
      screen: StatNav,
      navigationOptions: {
        drawerLabel: "통계",
        drawerIcon: () => (
          <Icon name="barschart" size={25} type="antdesign" color="#544e48" />
        ),
      },
    },

    Posture: {
      screen: Posture,
      navigationOptions: {
        drawerLabel: "자세 설명",
        drawerIcon: () => (
          <Icon
            name="airline-seat-recline-normal"
            size={25}
            type="material"
            color="#544e48"
          />
        ),
      },
    },
    PostureSwiper: {
      screen: PostureSwiper,
      navigationOptions: {
        drawerLabel: "자세 스와이프",
        drawerIcon: () => (
          <Icon
            name="airline-seat-recline-normal"
            size={25}
            type="material"
            color="#544e48"
          />
        ),
      },
    },
  },
  {
    hideStatusBar: false,
    intialRouteName: "Home",
    //drawerBackgroundColor: "#DFCEBE", // 앱의 백그라운드 컬러와 맞추면 됨
    overlayColor: "#d3d3d3",
    contentComponent: DrawerContent,
    contentOptions: {
      labelStyle: { fontSize: 15 },
      activeTintColor: "#695c4c",
      inactiveTintColor: "#d3d3d3",
    },
  }
);
