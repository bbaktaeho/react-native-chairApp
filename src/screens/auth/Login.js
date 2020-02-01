import React from "react";
import { View, StyleSheet, ImageBackground, Alert } from "react-native";
import { Input, Text, Icon, Button, Image } from "react-native-elements";
// import Icon from "react-native-vector-icons/FontAwesome";
import { host } from "../../NET";
import AuthButton from "../../components/AuthButton";

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
    width: "80%"
  }
});

class Login extends React.Component {
  state = {
    email: "",
    passwd: ""
  };

  signIn = async () => {
    await fetch(host + "/api/auth/login", {
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
      const res = JSON.parse(resData._bodyInit);
      if (res.success) {
        let loginData = {
          email: res.email,
          name: res.name,
          message: res.message,
          accessToken: res.accessToken
        };
        console.log(loginData);

        this.props.navigation.navigate("AuthLoading", loginData);
      } else Alert.alert(res.success, res.message);
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
            <AuthButton
              onPress={() => this.signIn()}
              title="로그인"
              backColor="lightblue"
            ></AuthButton>
          )}
          {this.state.email === "" && this.state.passwd === "" && (
            <AuthButton
              title="비회원 시작"
              onPress={() => this.props.navigation.navigate("MainNav")}
            ></AuthButton>
          )}
          <View style={{ height: 10 }}></View>
          <AuthButton
            onPress={() => this.props.navigation.navigate("SignUp")}
            title="회원가입"
            backColor="lightgreen"
          ></AuthButton>
        </View>
      </View>
    );
  }
}

export default Login;
