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
  Avatar,
} from "react-native";
import { Icon } from "react-native-elements";
import Tabs from "react-native-tabs";
import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import Fetch from "../../components/Fetch";
import URL from "../../NET";

const style = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
    width: "88%",
  },
});

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
      const res = await Fetch(URL.account, "GET", null, token);
      const body = JSON.parse(res._bodyText);
      if (body.success) {
        this.setState({ email: body.user.email, name: body.user.name });
      } else {
        console.log("fetch error");
      }
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
              {/* <Avatar
                size="large"
                rounded
                icon={{ name: "user", type: "font-awesome" }}
                overlayContainerStyle={{ backgroundColor: "#695c4c" }}
              /> */}
              <Text style={styles.textContainer}>{name}</Text>
            </View>
          </View>

          <View style={styles.container2}>
            <Tabs
              selected={this.state.page}
              style={{ backgroundColor: "white" }}
              selectedIconStyle={{
                borderTopWidth: 2,
                borderTopColor: "#ABA095",
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
                  <MyInput disabled={true} value={email} name="mail" />
                  <MyInput disabled={true} value={name} name="mail" />
                  <MyInput
                    disabled={true}
                    secure={true}
                    value="123456"
                    name="mail"
                  />
                </View>
              )}
              {this.state.page == "second" && (
                <View>
                  <MyInput disabled={true} value={email} name="mail" />
                  <MyInput
                    changeText={(val) => {
                      this.onChangeText("newemail", val);
                    }}
                    name="mail"
                  />

                  <MyButton
                    onPress={() => this.emailmodify()}
                    title="수정하기"
                    loading={privacyButton}
                  ></MyButton>
                </View>
              )}
              {this.state.page == "third" && (
                <View>
                  <MyInput
                    secure={true}
                    changeText={(val) => {
                      this.onChangeText("password", val);
                    }}
                    name="mail"
                  />
                  <MyInput
                    secure={true}
                    changeText={(val) => {
                      this.onChangeText("newpassword", val);
                    }}
                    name="mail"
                  />

                  <MyButton
                    onPress={() => this.passwordmodify()}
                    title="수정하기"
                  ></MyButton>
                </View>
              )}
              {this.state.page == "fourth" && (
                <View>
                  <View
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      탈퇴한 회원 정보는 모두 삭제됩니다.{"\n"}탈퇴를
                      진행하시려면 비밀번호를 입력해주세요.
                    </Text>
                  </View>

                  <View style={{ marginTop: 20 }}>
                    <MyInput
                      secure={true}
                      changeText={(val) => {
                        this.onChangeText("password", val);
                      }}
                      name="mail"
                    />
                    <MyButton
                      onPress={() => this.withdrawal()}
                      title="탈퇴하기"
                    ></MyButton>
                  </View>
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
    backgroundColor: "#cfccc8",
    height: 240,
  },
  avatar: {
    width: 130,
    height: 130,

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
    color: "#695c4c",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 170,
    alignSelf: "center",
  },
});
