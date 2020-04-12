// 앱 시작 시 로딩 화면
import React, { Component } from "react";
import { ImageBackground, Text, AsyncStorage } from "react-native";

export default class Loading extends Component {
  constructor() {
    super();
    this.state = {
      timer: null,
    };
  }

  async componentDidMount() {
    this.state.timer = setTimeout(() => {
      this.props.navigation.navigate("Login");
    }, 3000);
  }

  componentWillMount() {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/Images/MainLogo_2.png")}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        resizeMode="contain"
      ></ImageBackground>
    );
  }
}
