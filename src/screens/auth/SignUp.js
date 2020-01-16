import React from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { Input, Text, Icon, Button } from "react-native-elements";
import Toast from "@remobile/react-native-toast";

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
    width: "85%",
    paddingBottom: 35
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {}
});

class SignUp extends React.Component {
  state = {
    email: "",
    name: "",
    passwd: "",
    checkPasswd: ""
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value }); // 생소한 문법이지만 key가 'email' 일 때 [key]: value 부분은 email: value 로 변경됨
  };

  signUp = async () => {
    if (this.state.checkPasswd == this.state.passwd) {
      await fetch(host + "/auth/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          name: this.state.name,
          password: this.state.passwd
        })
      })
        .then(resData => {
          if (JSON.parse(resData._bodyInit).success) {
            Alert.alert("", JSON.parse(resData._bodyInit).message, [
              {
                text: "로그인",
                onPress: () => this.props.navigation.navigate("Login")
              }
            ]);
          } else Alert.alert("", JSON.parse(resData._bodyInit).message);
        })
        .then(jsonData => {})
        .done();
    } else Toast.showShortBottom("비밀번호 틀림");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text h4>회원가입</Text>
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
            label="Name"
            onChangeText={val => {
              this.onChangeText("name", val);
            }}
            value={this.state.name}
            containerStyle={{ paddingBottom: 10 }}
            placeholder="name"
            leftIcon={<Icon name="person" color="black" />}
          />
          <Input
            label="Password"
            onChangeText={val => {
              this.onChangeText("passwd", val);
            }}
            value={this.state.passwd}
            containerStyle={{ paddingBottom: 10 }}
            placeholder="password"
            secureTextEntry={true}
            leftIcon={<Icon name="lock" color="black" />}
          />

          <Input
            onChangeText={val => {
              this.onChangeText("checkPasswd", val);
            }}
            value={this.state.checkPasswd}
            label="Re-Enter Password"
            placeholder="re_enter password"
            secureTextEntry={true}
            leftIcon={<Icon name="lock" color="black" />}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate("MainNav")}
            title="비회원 시작"
            type="clear"
          ></Button>

          <Button
            onPress={() => this.signUp()}
            title="가입하기"
            type="clear"
          ></Button>
        </View>
      </View>
    );
  }
}

export default SignUp;
