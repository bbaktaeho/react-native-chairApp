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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    margin: 13,
  },
  text1: {
    fontSize: 23,
    fontWeight: "bold",
  },
  text2: {
    marginTop: 3,
  },
  text3: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#cd5c5c",
  },
});

export default class Withdrawal extends Component {
  state = {
    password: "",
    privacyButton: false,
  };

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
      <View style={styles.container}>
        <MyHeader
          navigation={this.props.navigation}
          title="회원 탈퇴"
          type="privacy"
        ></MyHeader>

        <View style={styles.textContainer}>
          <Text style={styles.text1}>회원탈퇴 안내사항</Text>
          <Text style={styles.text2}>
            {"\n"}- 회원탈퇴 시 계정 정보는 즉시 삭제되며 복구가 불가합니다.
          </Text>
          <Text style={styles.text2}>
            - 회원님의 자세데이터는 모두 소멸되며 복구할 수 없습니다.
          </Text>
          <Text style={styles.text2}>
            - 탈퇴 후 자동 로그아웃되며 재가입이 가능합니다.
          </Text>
          <Text style={styles.text3}>
            {"\n"}
            {"\n"}탈퇴를 하시려면 비밀번호를 입력해주세요.
          </Text>
        </View>

        <View>
          <MyInput
            secure={true}
            changeText={(val) => {
              this.onChangeText("password", val);
            }}
            placeholder="비밀번호 입력"
            name="lock"
          />
          <MyButton
            onPress={() => this.withdrawal()}
            title="탈퇴하기"
            loading={privacyButton}
          ></MyButton>
        </View>
      </View>
    );
  }
}
