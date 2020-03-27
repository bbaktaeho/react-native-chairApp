import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input, Text, Icon, Image } from "react-native-elements";
import AuthButton from "../../components/AuthButton";
import Fetch from "../../components/Fetch";
import URL from "../../NET";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  logoContainer: {
    marginTop: 35
  },
  inputContainer: {
    width: "90%",
    marginTop: 30
  },
  buttonContainer: {
    width: "85%",
    marginTop: 50
  }
});

export default class SignUp extends React.Component {
  state = {
    email: "",
    name: "",
    passwd: "",
    checkPasswd: "",
    signUpButton: false
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value }); // 생소한 문법이지만 key가 'email' 일 때 [key]: value 부분은 email: value 로 변경됨
  };

  myAlert = message =>
    Alert.alert("", message, [
      {
        text: "확인",
        onPress: () => {
          this.setState({ signUpButton: false });
        }
      }
    ]);

  signUp = async () => {
    this.setState({ signUpButton: true }); // 버튼 클릭 시 로딩
    const { email, name, passwd, checkPasswd } = this.state;
    if (!(email && name && passwd)) {
      return this.myAlert("모두 입력하세요");
    }
    if (checkPasswd == passwd) {
      const res = await Fetch(URL.signup, "POST", {
        email: email,
        name: name,
        password: passwd
      });

      if (res == "error") {
        console.log("fetch error");
      } else {
        if (res.success) {
          this.setState({ signUpButton: false });
          Alert.alert("", res.message, [
            {
              text: "로그인하러 가기",
              onPress: () => this.props.navigation.navigate("Login")
            }
          ]);
        } else {
          return this.myAlert(res.message);
        }
      }
    } else {
      return Alert.alert("", "비밀번호가 틀립니다", [
        {
          text: "확인",
          onPress: () => {
            this.setState({ signUpButton: false });
          }
        }
      ]);
    }
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
            onChangeText={val => {
              this.onChangeText("email", val);
            }}
            value={this.state.email}
            containerStyle={{ paddingBottom: 20 }}
            placeholder="이메일 입력"
            leftIcon={<Icon name="mail" color="gray" />}
          />
          <Input
            onChangeText={val => {
              this.onChangeText("name", val);
            }}
            value={this.state.name}
            containerStyle={{ paddingBottom: 20 }}
            placeholder="이름 입력"
            leftIcon={<Icon name="person" color="gray" />}
          />
          <Input
            onChangeText={val => {
              this.onChangeText("passwd", val);
            }}
            value={this.state.passwd}
            containerStyle={{ paddingBottom: 20 }}
            placeholder="비밀번호 입력"
            secureTextEntry={true}
            leftIcon={<Icon name="lock" color="gray" />}
          />

          <Input
            onChangeText={val => {
              this.onChangeText("checkPasswd", val);
            }}
            value={this.state.checkPasswd}
            placeholder="비밀번호 재입력"
            secureTextEntry={true}
            leftIcon={<Icon name="lock" color="gray" />}
          />
        </View>

        <View style={styles.buttonContainer}>
          <AuthButton
            onPress={() => this.signUp()}
            title="가입하기"
            loading={this.state.signUpButton}
            backColor="#C8A480"
          ></AuthButton>
        </View>
      </View>
    );
  }
}
