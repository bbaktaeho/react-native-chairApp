import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>로그인 화면</Text>
        <Button
          onPress={() => this.props.navigation.navigate("MainNav")}
          title="로그인"
        ></Button>
        <Button
          onPress={() => this.props.navigation.navigate("SignUp")}
          title="회원가입"
        ></Button>
      </View>
    );
  }
}

export default Login;
