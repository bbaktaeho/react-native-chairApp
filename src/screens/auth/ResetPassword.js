import React, { Component } from "react";
import { View, StyleSheet, ToastAndroid } from "react-native";
import { Input, Icon } from "react-native-elements";
import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import Fetch from "../../components/Fetch";
import URL from "../../NET";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 35,
  },
  inputContainer: {
    width: "85%",
    marginTop: 30,
  },
  buttonContainer: {
    width: "90%",
  },
});

export default class ResetPassword extends Component {
  state = {
    email: "",
    name: "",
    resetpasswdButton: false,
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value }); // 생소한 문법이지만 key가 'email' 일 때 [key]: value 부분은 email: value 로 변경됨
  };

  changePassword = async () => {
    this.setState({ resetpasswdButton: true });
    const { email, name } = this.state;

    const res = await Fetch(URL.password, "POST", {
      email: email,
      name: name,
    });

    const body = JSON.parse(res._bodyText);

    if (body.success) {
      ToastAndroid.show(
        "이메일로 전송된 새비밀번호를 확인해주세요.",
        ToastAndroid.LONG
      );
      this.props.navigation.navigate("Login");
    } else {
      ToastAndroid.show("다시 입력해주세요", ToastAndroid.SHORT);
      this.setState({ resetpasswdButton: false });
    }
  };

  render() {
    const { resetpasswdButton } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <MyInput
            value={this.state.email}
            label="이메일"
            changeText={(val) => {
              this.onChangeText("email", val);
            }}
            name="mail"
          />
          <MyInput
            value={this.state.name}
            label="이름"
            changeText={(val) => {
              this.onChangeText("name", val);
            }}
            name="person"
          />
        </View>

        <View style={styles.buttonContainer}>
          <MyButton
            title="확인"
            radius={10}
            width="89%"
            onPress={() => this.changePassword()}
            loading={resetpasswdButton}
          ></MyButton>
        </View>
      </View>
    );
  }
}
