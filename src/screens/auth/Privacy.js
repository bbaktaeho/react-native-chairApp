import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  ScrollView,
  ToastAndroid,
  Alert,
} from "react-native";
import { Input } from "react-native-elements";
import Tabs from "react-native-tabs";
import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";
import Fetch from "../../components/Fetch";
import URL from "../../NET";

export default class Privacy extends Component {
  state = {
    page: "first",
    email: "",
    name: "",
    password: "",
    newemail: "",
    newpassword: "",
    privacyButton: false,
  };

  requestInfo = async () => {
    const token = await AsyncStorage.getItem("token");

    if (token == null) {
      this.setState({ email: "비회원", name: "비회원" });
    } else {
      await fetch(URL.account, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((resData) => {
        const body = JSON.parse(resData._bodyText);

        if (body.success) {
          this.setState({ email: body.user.email, name: body.user.name });
        } else {
          console.log(body.message);
        }
      });
      // const res = await Fetch(URL.account, "GET", { empty: 0 }, token);

      // const body = JSON.parse(res._bodyText);

      // if (body.success) {
      //   this.setState({ email: body.user.email, name: body.user.name });
      // } else {
      //   console.log("fetch error");
      // }
    }
  };

  myAlert = (title, message, text, onPress) =>
    Alert.alert(title, message, [
      {
        text,
        onPress,
      },
    ]);

  logout_removeItem = async () => {
    await AsyncStorage.removeItem("token");
    ToastAndroid.show("다시 로그인 해주세요.", ToastAndroid.SHORT);
    this.props.navigation.navigate("AuthNav");
  };

  emailmodify = async () => {
    this.setState({ privacyButton: true });
    const token = await AsyncStorage.getItem("token");
    const { newemail } = this.state;

    const res = await Fetch(
      URL.emailmodify,
      "PUT",
      {
        newEmail: newemail,
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

  passwordmodify = async () => {
    this.setState({ privacyButton: true });
    const token = await AsyncStorage.getItem("token");
    const { password, newpassword } = this.state;

    const res = await Fetch(
      URL.passwordmodify,
      "PUT",
      {
        password: password,
        newPassword: newpassword,
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

  withdrawal = async () => {
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

  componentWillMount() {
    this.requestInfo();
  }

  render() {
    const { email, name, privacyButton } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.container1}>
            <MyHeader
              navigation={this.props.navigation}
              title="내 정보"
            ></MyHeader>
            <View style={styles.header}>
              <Image
                style={styles.avatar}
                source={require("../../assets/Images/ex.png")}
              />
              <Text style={styles.textContainer}>{name}</Text>
            </View>
          </View>

          <View style={styles.container2}>
            <Tabs
              selected={this.state.page}
              style={{ backgroundColor: "white" }}
              selectedIconStyle={{
                borderTopWidth: 2,
                borderTopColor: "#CEAEA7",
              }}
              onSelect={(el) => this.setState({ page: el.props.name })}
            >
              <Text name="first">내 정보</Text>
              <Text
                name="second"
                selectedIconStyle={{
                  borderTopWidth: 2,
                  borderTopColor: "#CEAEA7",
                }}
              >
                이메일 변경
              </Text>
              <Text
                name="third"
                selectedIconStyle={{
                  borderTopWidth: 2,
                  borderTopColor: "#CEAEA7",
                }}
              >
                비밀번호 변경
              </Text>
              <Text
                name="fourth"
                selectedIconStyle={{
                  borderTopWidth: 2,
                  borderTopColor: "#CEAEA7",
                }}
              >
                회원 탈퇴
              </Text>
            </Tabs>
          </View>

          <View style={styles.container3}>
            <View style={styles.inputContainer}>
              {this.state.page == "first" && (
                <View>
                  <Input
                    disabled={true}
                    value={email}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>이메일ㅤㅤ</Text>}
                  ></Input>

                  <Input
                    disabled={true}
                    value={name}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>이름ㅤㅤㅤ</Text>}
                  ></Input>

                  <Input
                    disabled={true}
                    secureTextEntry={true}
                    value="1234567"
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>비밀번호ㅤ</Text>}
                  ></Input>
                </View>
              )}
              {this.state.page == "second" && (
                <View>
                  <Input
                    disabled={true}
                    value={email}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>현재 이메일ㅤㅤ</Text>}
                  ></Input>

                  <Input
                    onChangeText={(val) => {
                      this.onChangeText("newemail", val);
                    }}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>변경 이메일ㅤㅤ</Text>}
                  ></Input>

                  <MyButton
                    onPress={() => this.emailmodify()}
                    title="수정하기"
                    backColor="#C8A480"
                    loading={privacyButton}
                  ></MyButton>
                </View>
              )}
              {this.state.page == "third" && (
                <View>
                  <Input
                    onChangeText={(val) => {
                      this.onChangeText("password", val);
                    }}
                    secureTextEntry={true}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>현재 비밀번호ㅤㅤ</Text>}
                  ></Input>

                  <Input
                    onChangeText={(val) => {
                      this.onChangeText("newpassword", val);
                    }}
                    secureTextEntry={true}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>변경 비밀번호ㅤㅤ</Text>}
                  ></Input>

                  <MyButton
                    onPress={() => this.passwordmodify()}
                    title="수정하기"
                    backColor="#C8A480"
                  ></MyButton>
                </View>
              )}
              {this.state.page == "fourth" && (
                <View>
                  <Text>
                    탈퇴한 회원 정보는 모두 삭제됩니다. 탈퇴하시겠습니까?
                  </Text>
                  <Input
                    onChangeText={(val) => {
                      this.onChangeText("password", val);
                    }}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>비밀번호ㅤㅤㅤ</Text>}
                  ></Input>
                  <MyButton
                    onPress={() => this.withdrawal()}
                    title="탈퇴하기"
                    backColor="#C8A480"
                  ></MyButton>
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  container3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  header: {
    backgroundColor: "gainsboro",
    height: 240,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 25,
  },
  inputContainer: {
    width: "80%",
    marginTop: 20,
  },
  textContainer: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 190,
    alignSelf: "center",
  },
});
