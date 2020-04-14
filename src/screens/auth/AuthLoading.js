import React from "react";
import { View, AsyncStorage, ToastAndroid } from "react-native";
import { PacmanIndicator } from "react-native-indicators";

export default class AuthLoading extends React.Component {
  async componentDidMount() {
    const token = this.props.navigation.getParam("token", "nonetoken");
    const check = this.props.navigation.getParam("check", "nonecheck");

    try {
      await AsyncStorage.setItem("token", token);

      if (check == 0) {
        setTimeout(() => {
          ToastAndroid.show("로그인 성공", ToastAndroid.SHORT);
          this.props.navigation.navigate("Guide");
        }, 1500);
      } else {
        setTimeout(() => {
          ToastAndroid.show("로그인 성공", ToastAndroid.SHORT);
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
