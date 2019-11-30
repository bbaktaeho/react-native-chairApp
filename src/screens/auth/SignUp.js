import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>회원가입 화면</Text>
        <Button
          onPress={() => this.props.navigation.navigate("Login")}
          title="로그인하러 가기"
        ></Button>
      </View>
    );
  }
}

export default SignUp;
