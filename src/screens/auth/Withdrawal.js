import React, { Component } from "react";
import {
  View,
  Text,
  AsyncStorage,
  ToastAndroid,
  StyleSheet,
} from "react-native";

import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import Fetch from "../../components/Fetch";
import URL from "../../NET";
import { Divider, Overlay } from "react-native-elements";

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container2: {
    alignItems: "center",
  },

  Text1: {
    fontSize: 23,
    fontWeight: "bold",
  },
  Text2: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: "bold",
  },
  text1: {
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
    marginBottom: 20,
    color: "#ABA095",
  },
  text2: {
    marginBottom: 10,
  },
  text3: {
    marginTop: 3,
    fontSize: 13,
  },

  inputContainer: {
    width: "90%",
  },
  textContainer: {
    alignItems: "center",
  },
  textContainer1: {
    margin: 28,
  },

  textContainer2: {
    marginTop: 30,
  },
});

export default class Withdrawal extends Component {
  state = {
    password: "",
    repassword: "",
    view: "",
    privacyButton: false,
  };

  async componentWillMount() {
    const token = await AsyncStorage.getItem("token");
    if (token == null) this.setState({ view: "unlogin" });
    else this.setState({ view: "login" });
  }

  logout_removeItem = async () => {
    await AsyncStorage.removeItem("token");
    ToastAndroid.show("다시 로그인 해주세요.", ToastAndroid.SHORT);
    this.props.navigation.navigate("AuthNav");
  };

  withdrawal = async () => {
    this.setState({ privacyButton: true });
    const token = await AsyncStorage.getItem("token");
    const { password } = this.state;

    const res = await Fetch(
      URL.withdrawal,
      "DELETE",
      {
        password: password,
      },
      token
    );

    const body = JSON.parse(res._bodyText);

    if (body.success) {
      this.logout_removeItem();
    } else {
      ToastAndroid.show(body.message, ToastAndroid.LONG);
      this.setState({ privacyButton: false });
    }
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { privacyButton } = this.state;

    return (
      <View style={styles.container1}>
        <MyHeader
          navigation={this.props.navigation}
          title="회원 탈퇴"
          type="nav"
          select="p"
        ></MyHeader>

        <View style={styles.textContainer1}>
          <Text style={styles.Text1}>회원 탈퇴</Text>
          <Text style={{ marginTop: 3, fontSize: 13 }}>
            탈퇴를 진행하려면 비밀번호를 입력해주세요.
          </Text>
        </View>

        <View style={styles.container2}>
          <View style={styles.inputContainer}>
            <MyInput
              secure={true}
              changeText={(val) => {
                this.onChangeText("password", val);
              }}
              label="비밀번호"
            />
            <MyInput
              secure={true}
              changeText={(val) => {
                this.onChangeText("repassword", val);
              }}
              label="비밀번호 확인"
            />
            <MyButton
              onPress={() => this.withdrawal()}
              title="탈퇴하기"
              loading={privacyButton}
            ></MyButton>
          </View>

          <View style={styles.textContainer2}>
            <Divider width={380} />
            <Text style={styles.Text2}>회원탈퇴 안내사항</Text>
            <Text style={styles.text3}>
              {"\n"}✔︎ 회원탈퇴 시 계정 정보는 즉시 삭제되며 복구가 불가합니다.
            </Text>
            <Text style={styles.text3}>
              ✔︎ 회원님의 자세데이터는 모두 소멸되며 복구할 수 없습니다.
            </Text>
            <Text style={styles.text3}>
              ✔︎ 탈퇴 후 자동 로그아웃되며 즉시 재가입이 가능합니다.
            </Text>
          </View>

          {this.state.view == "unlogin" && (
            <Overlay
              isVisible={true}
              overlayStyle={{ height: 300, justifyContent: "center" }}
            >
              <View>
                <View style={styles.textContainer}>
                  <Text style={styles.text1}>비회원 접근제한</Text>

                  <Text>로그인이 필요한 서비스 입니다.</Text>
                  <Text style={styles.text2}>로그인 후 사용해주세요.</Text>
                </View>

                <MyButton
                  title="로그인 하러가기"
                  radius={5}
                  onPress={() => this.props.navigation.navigate("AuthNav")}
                ></MyButton>

                <MyButton
                  title="돌아가기"
                  radius={5}
                  onPress={() => this.props.navigation.goBack()}
                ></MyButton>
              </View>
            </Overlay>
          )}
        </View>
      </View>
    );
  }
}
