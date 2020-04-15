import React, { Component } from "react";
import { View, StyleSheet, ToastAndroid } from "react-native";
import { Input, Icon } from "react-native-elements";
import AuthButton from "../../components/AuthButton";
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
    width: "85%",
    marginTop: 50,
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
          <Input
            onChangeText={(val) => {
              this.onChangeText("email", val);
            }}
            value={this.state.email}
            inputStyle={{ color: "gray", fontSize: 16 }}
            inputContainerStyle={{
              borderBottomWidth: 0,
              backgroundColor: "#F2F2F2",
              borderRadius: 10,
            }}
            containerStyle={{ paddingBottom: 20 }}
            placeholder="이메일 입력"
            leftIcon={<Icon name="mail" color="#CEAEA7" />}
          />
          <Input
            onChangeText={(val) => {
              this.onChangeText("name", val);
            }}
            value={this.state.name}
            inputStyle={{ color: "gray", fontSize: 16 }}
            inputContainerStyle={{
              borderBottomWidth: 0,
              backgroundColor: "#F2F2F2",
              borderRadius: 10,
            }}
            containerStyle={{ paddingBottom: 20 }}
            placeholder="이름 입력"
            leftIcon={<Icon name="person" color="#CEAEA7" />}
          />
        </View>

        <View style={styles.buttonContainer}>
          <AuthButton
            title="확인"
            backColor="#CEAEA7"
            onPress={() => this.changePassword()}
            loading={resetpasswdButton}
          ></AuthButton>
        </View>
      </View>
    );
  }
}
