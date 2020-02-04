import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input, Text, Icon } from "react-native-elements";
import AuthButton from "../../components/AuthButton";
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
    width: "80%"
  },
  button: {}
});

class SignUp extends React.Component {
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
    const { email, name, passwd } = this.state;
    if (!(email && name && passwd)) {
      return this.myAlert("모두 입력하세요");
    }
    if (this.state.checkPasswd == this.state.passwd) {
      await fetch(host + "/api/auth/register", {
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
          const res = JSON.parse(resData._bodyInit);
          if (res.success) {
            this.setState({ signUpButton: false });
            Alert.alert("", res.message, [
              {
                text: "로그인",
                onPress: () => this.props.navigation.navigate("Login")
              }
            ]);
          } else {
            return this.myAlert(res.message);
          }
        })
        .then(jsonData => {})
        .done();
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
          <Text h4 style={{ color: "black" }}>
            회원가입
          </Text>
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
          <AuthButton
            onPress={() => this.props.navigation.navigate("Login")}
            title="로그인"
            backColor="lightblue"
          ></AuthButton>

          <View style={{ height: 10 }}></View>

          <AuthButton
            onPress={() => this.signUp()}
            title="가입하기"
            loading={this.state.signUpButton}
            backColor="lightgreen"
          ></AuthButton>
        </View>
      </View>
    );
  }
}

export default SignUp;
