import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Image } from "react-native-elements";
import URL from "../../NET";
import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import Fetch from "../../components/Fetch";
import testPush from "../../utils/localPushNotification";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 90,
  },
  inputContainer: {
    marginTop: 50,
    width: "85%",
  },
  buttonContainer: {
    marginTop: 30,
    width: "88%",
  },
  touchableContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  touchable: {
    marginTop: 30,
    width: "35%",
    alignItems: "center",
  },
  text: {
    color: "#ABA095",
  },
});

class Login extends React.Component {
  state = {
    email: "",
    passwd: "",
    loginButton: false,
  };

  myAlert = (message) =>
    Alert.alert("경고", message, [
      {
        text: "확인",
        onPress: () => {
          this.setState({ loginButton: false });
        },
      },
    ]);

  signIn = async () => {
    this.setState({ loginButton: true });

    const res = await Fetch(URL.login, "POST", {
      email: this.state.email,
      password: this.state.passwd,
    });

    const body = JSON.parse(res._bodyText);

    if (body.success) {
      let loginData = {
        message: body.message,
        token: res.headers.map.authorization,
        check: body.check,
      };

      this.setState({ loginButton: false });
      this.props.navigation.navigate("AuthLoading", loginData);
    } else {
      return this.myAlert(body.message);
    }
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value }); // 생소한 문법이지만 key가 'email' 일 때 [key]: value 부분은 email: value 로 변경됨
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/Images/MainLogo_1.png")}
              style={{ width: 140, height: 140 }}
            ></Image>
          </View>
          <View style={styles.inputContainer}>
            <MyInput
              value={this.state.email}
              placeholder="이메일"
              changeText={(val) => {
                this.onChangeText("email", val);
              }}
              radius={120}
              name="mail"
            />

            <MyInput
              value={this.state.passwd}
              placeholder="비밀번호"
              changeText={(val) => {
                this.onChangeText("passwd", val);
              }}
              radius={120}
              name="lock"
            />
          </View>

          <View style={styles.buttonContainer}>
            {!(this.state.email === "") && (
              <MyButton
                onPress={() => this.signIn()}
                title="로그인"
                loading={this.state.loginButton}
              ></MyButton>
            )}
            {this.state.email === "" && this.state.passwd === "" && (
              <MyButton
                title="비회원으로 시작하기"
                onPress={() => this.props.navigation.navigate("Guide")}
              ></MyButton>
            )}
          </View>

          <View style={styles.touchableContainer}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              <Text style={styles.text}>회원가입 </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchable}
              onPress={() => this.props.navigation.navigate("ResetPassword")}
            >
              <Text style={styles.text}>비밀번호 찾기 </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={styles.touchable}
              onPress={() => testPush()}
            >
              <Text style={styles.text}>테스트 푸시알림</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Login;
