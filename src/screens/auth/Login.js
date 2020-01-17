import React from "react";
import { View, StyleSheet, ImageBackground, Alert } from "react-native";
import { Input, Text, Icon, Button, Image } from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";
import { host } from "../../NET";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    paddingBottom: 35
  },
  inputContainer: {
    paddingBottom: 35,
    width: "85%"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {}
});

class Login extends React.Component {
  state = {
    email: "",
    passwd: ""
  };

  signIn = async () => {
    await fetch(host + "/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.passwd
      })
    }).then(resData => {
      if (JSON.parse(resData._bodyInit).success) {
        this.props.navigation.navigate("AuthLoading", this.state);
      } else Alert.alert("", JSON.parse(resData._bodyInit).message);
    });
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value }); // 생소한 문법이지만 key가 'email' 일 때 [key]: value 부분은 email: value 로 변경됨
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/Images/chair_font.png")}
            style={{ width: 200, height: 100 }}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            label="Email"
            onChangeText={val => {
              this.onChangeText("email", val);
            }}
            value={this.state.email}
            containerStyle={{ paddingBottom: 10 }}
            placeholder="email@address.com"
            leftIcon={<Icon name="mail" color="black" />}
          />

          <Input
            onChangeText={val => {
              this.onChangeText("passwd", val);
            }}
            value={this.state.passwd}
            label="Password"
            placeholder="password"
            secureTextEntry={true}
            leftIcon={<Icon name="lock" color="black" />}
          />
        </View>

        <View style={styles.buttonContainer}>
          {!(this.state.email === "") && (
            <Button
              onPress={() => this.signIn()}
              title="로그인"
              type="clear"
            ></Button>
          )}
          {this.state.email === "" && this.state.passwd === "" && (
            <Button
              onPress={() => this.props.navigation.navigate("MainNav")}
              title="비회원 시작"
              type="clear"
            ></Button>
          )}

          <Button
            onPress={() => this.props.navigation.navigate("SignUp")}
            title="회원가입"
            type="clear"
          ></Button>
        </View>
      </View>
    );
  }
}

export default Login;
