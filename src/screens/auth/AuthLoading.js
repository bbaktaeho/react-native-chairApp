import React from "react";
import { View, AsyncStorage } from "react-native";
import { PacmanIndicator } from "react-native-indicators";
import Toast from "@remobile/react-native-toast";

export default class AuthLoading extends React.Component {
  async componentDidMount() {
    try {
      await AsyncStorage.setItem(
        "message",
        this.props.navigation.getParam("message", "nonemessage")
      );
      await AsyncStorage.setItem(
        "token",
        this.props.navigation.getParam("token", "nonetoken")
      );
      //loginData asyncstorage에 저장됨
      console.log(await AsyncStorage.getItem("token"));

      setTimeout(() => {
        Toast.showShortBottom("로그인 성공");
        this.props.navigation.navigate("MainNav");
      }, 1500);
    } catch (e) {
      console.log(e);
    }
  }

  componentWillMount() {}

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <PacmanIndicator size={50}></PacmanIndicator>
      </View>
    );
  }
}
