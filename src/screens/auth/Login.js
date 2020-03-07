import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Input, Icon, Image } from "react-native-elements";
import URL from "../../NET";
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
    width: "90%"
  },
  buttonContainer: {
    width: "88%"
  },
  touchableContainer: {
    marginTop: 30
  },
  text: {
    fontStyle: "italic",
    color: "#CEAEA7"
  }
});

class Login extends React.Component {
  state = {
    email: "",
    passwd: "",
    loginButton: false
  };

  signIn = async () => {
    this.setState({ loginButton: true });
    await fetch(URL.login, {
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
          message: res.message,
          token: res.token
        };
        this.setState({ loginButton: false });
        this.props.navigation.navigate("AuthLoading", loginData);
      } else {
        Alert.alert(res.success, res.message, [
          {
            text: "확인",
            onPress: () => {
              this.setState({ loginButton: false });
            }
          }
        ]);
      }
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
            onChangeText={val => {
              this.onChangeText("email", val);
            }}
            value={this.state.email}
            containerStyle={{ paddingBottom: 13 }}
            placeholder="이메일"
            leftIcon={<Icon name="mail" color="gray" />}
          />

          <Input
            onChangeText={val => {
              this.onChangeText("passwd", val);
            }}
            value={this.state.passwd}
            placeholder="비밀번호"
            secureTextEntry={true}
            leftIcon={<Icon name="lock" color="gray" />}
          />
        </View>

        <View style={styles.buttonContainer}>
          {!(this.state.email === "") && (
            <AuthButton
              onPress={() => this.signIn()}
              title="로그인"
              backColor="#CEAEA7"
              loading={this.state.loginButton}
            ></AuthButton>
          )}
          {this.state.email === "" && this.state.passwd === "" && (
            <AuthButton
              title="비회원으로 시작하기"
              backColor="#CEAEA7"
              onPress={() => this.props.navigation.navigate("Guide")}
            ></AuthButton>
          )}
          <View>
            <Text></Text>
          </View>
          <AuthButton
            onPress={() => this.props.navigation.navigate("SignUp")}
            title="기미짱"
            backColor="#C8A480"
          ></AuthButton>
        </View>

        <View>
          <TouchableOpacity
            style={styles.touchableContainer}
            onPress={() => this.props.navigation.navigate("ResetPassword")}
          >
            <Text style={styles.text}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;
