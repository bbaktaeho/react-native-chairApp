import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input, Icon, Image } from "react-native-elements";
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

export default class SignUp extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
    checkpassword: "",
    signUpButton: false,
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value }); // 생소한 문법이지만 key가 'email' 일 때 [key]: value 부분은 email: value 로 변경됨
  };

  myAlert = (title, message, text, onPress) =>
    Alert.alert(title, message, [
      {
        text,
        onPress,
      },
    ]);

  signUp = async () => {
    this.setState({ signUpButton: true }); // 버튼 클릭 시 로딩
    const { email, name, password, checkpassword } = this.state;
    if (!(email && name && password)) {
      return this.myAlert("경고", "모두 입력하세요", "확인");
    }

    if (checkpassword == password) {
      const res = await Fetch(URL.signup, "POST", {
        email: email,
        name: name,
        password: password,
      });
      const body = JSON.parse(res._bodyText);

      if (body.success) {
        this.setState({ signUpButton: false });
        return this.myAlert("", "로그인 성공", "로그인하러 가기", () =>
          this.props.navigation.navigate("Login")
        );
      } else {
        return this.myAlert("경고", "존재하는 이메일입니다.", "확인", () => {
          this.setState({ signUpButton: false });
        });
      }
    } else {
      return this.myAlert("경고", "비밀번호가 다릅니다.", "확인", () => {
        this.setState({ signUpButton: false });
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/Images/MainLogo_1.png")}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={styles.inputContainer}>
          <MyInput
            value={this.state.email}
            placeholder="이메일 입력"
            changeText={(val) => {
              this.onChangeText("email", val);
            }}
            name="mail"
          />
          <MyInput
            value={this.state.name}
            placeholder="이름 입력"
            changeText={(val) => {
              this.onChangeText("name", val);
            }}
            name="person"
          />
          <MyInput
            secure={true}
            value={this.state.password}
            placeholder="비밀번호 입력"
            changeText={(val) => {
              this.onChangeText("password", val);
            }}
            name="lock"
          />
          <MyInput
            secure={true}
            value={this.state.checkpassword}
            placeholder="비밀번호 확인"
            changeText={(val) => {
              this.onChangeText("checkpassword", val);
            }}
            name="lock"
          />
        </View>

        <View style={styles.buttonContainer}>
          <MyButton
            onPress={() => this.signUp()}
            title="가입하기"
            loading={this.state.signUpButton}
          ></MyButton>
        </View>
      </View>
    );
  }
}
