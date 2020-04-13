import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
} from "react-native";
import { Input, Icon, Image } from "react-native-elements";
import URL from "../../NET";
import AuthButton from "../../components/AuthButton";
import Fetch from "../../components/Fetch";

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
    color: "#CEAEA7",
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
      return this.myAlert(res);
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
            <Input
              onChangeText={(val) => {
                this.onChangeText("email", val);
              }}
              value={this.state.email}
              inputStyle={{ color: "gray", fontSize: 16 }}
              inputContainerStyle={{
                borderBottomWidth: 0,
                backgroundColor: "#F2F2F2",
                borderRadius: 120,
              }}
              containerStyle={{ paddingBottom: 13 }}
              placeholder="이메일"
              leftIcon={<Icon name="mail" color="#CEAEA7" />}
            />

            <Input
              onChangeText={(val) => {
                this.onChangeText("passwd", val);
              }}
              value={this.state.passwd}
              inputStyle={{ color: "gray", fontSize: 16 }}
              inputContainerStyle={{
                borderBottomWidth: 0,
                backgroundColor: "#F2F2F2",
                borderRadius: 120,
              }}
              placeholder="비밀번호"
              secureTextEntry={true}
              leftIcon={<Icon name="lock" color="#CEAEA7" />}
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
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Login;
