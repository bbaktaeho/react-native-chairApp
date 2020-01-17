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
        "userToken",
        this.props.navigation.getParam("email", "noneEmail")
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
