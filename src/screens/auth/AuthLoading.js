import React from "react";
import { View, AsyncStorage } from "react-native";
import { PacmanIndicator } from "react-native-indicators";
import Toast from "@remobile/react-native-toast";

export default class AuthLoading extends React.Component {
  async componentDidMount() {
    const token = this.props.navigation.getParam("token", "nonetoken");
    const check = this.props.navigation.getParam("check", "nonecheck");

    try {
      await AsyncStorage.setItem("token", token);
      if (check == 0) {
        setTimeout(() => {
          Toast.showShortBottom("로그인 성공");
          this.props.navigation.navigate("Guide");
        }, 1500);
      } else {
        setTimeout(() => {
          Toast.showShortBottom("로그인 성공");
          this.props.navigation.navigate("MainNav");
        }, 1500);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <PacmanIndicator size={50}></PacmanIndicator>
      </View>
    );
  }
}
