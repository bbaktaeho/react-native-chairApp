// 앱 시작 시 로딩 화면
import React, { Component } from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class Loading extends Component {
  constructor() {
    super();
    this.state = {
      timer: null
    };
  }

  componentDidMount() {
    this.state.timer = setTimeout(() => {
      this.props.navigation.navigate("AuthNav");
    }, 2500);
  }

  componentWillMount() {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>로딩중</Text>
      </View>
    );
  }
}
