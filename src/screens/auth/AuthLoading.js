import React from "react";
import { View, ActivityIndicator, AsyncStorage } from "react-native";
import Toast from "@remobile/react-native-toast";

export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      await AsyncStorage.setItem(
        "user_email",
        this.props.navigation.getParam("email", "noneEmail")
      );
      await AsyncStorage.setItem(
        "user_name",
        this.props.navigation.getParam("name", "noneName")
      );
      await AsyncStorage.setItem(
        "accessToken",
        this.props.navigation.getParam("accessToken", "noneAccessToken")
      );
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
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
}
