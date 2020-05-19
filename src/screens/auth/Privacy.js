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
import { Avatar, Divider, ListItem } from "react-native-elements";

import Tabs from "react-native-tabs";
import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import Fetch from "../../components/Fetch";
import URL from "../../NET";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  container3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#cfccc8",
    height: 240,
  },
  avatar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0eeeb",
    borderRadius: 8,
    margin: 10,
  },
  avatarText: {
    fontSize: 23,
    marginLeft: 30,
  },
  inputContainer: {
    width: "80%",
    marginTop: 20,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 22,
    marginBottom: 5,
    color: "silver",
  },
});

export default class Privacy extends Component {
  state = {
    page: "second",
    email: "",
    name: "",
    password: "",
    newemail: "",
    newpassword: "",
    privacyButton: false,
    list1: [
      {
        name: "이메일",
        chevron: true,
        // subtitle: this.state.page,
      },
      {
        name: "이름",
        chevron: true,
        subtitle: "Vice President",
        // press: () => {
        //   this.props.navigation.navigate("AppConfig");
        // },
      },
      {
        name: "비밀번호",
        chevron: true,
        subtitle: "Vice President",
      },
    ],
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

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  componentWillMount() {
    this.requestInfo();
  }

  render() {
    const { email, name, privacyButton, list1 } = this.state;
    return (
      <View style={styles.container}>
        <MyHeader
          navigation={this.props.navigation}
          type="privacy"
          title="회원 정보 수정"
        ></MyHeader>

        <View style={styles.avatar}>
          <Avatar
            size="medium"
            rounded
            icon={{ name: "user", type: "antdesign" }}
            overlayContainerStyle={{
              backgroundColor: "#d1cbc5",
            }} //695c4c
            containerStyle={{ marginLeft: 20 }}
          />
          <Text style={styles.avatarText}>{name}</Text>
        </View>

        <View style={{ flex: 4 }}>
          <Text style={styles.text}>회원 정보</Text>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Divider
              style={{
                width: 380,
                height: 2,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "silver",
              }}
            ></Divider>
          </View>
        </View>
        {list1.map((l, i) => (
          <ListItem
            key={i}
            title={l.name}
            rightTitle={l.rightT}
            chevron={l.chevron}
            onPress={l.press}
            subtitle={l.subtitle}
          />
        ))}

        {/* <View style={styles.container2}>
          <Tabs
            selected={this.state.page}
            style={{ backgroundColor: "white" }}
            selectedIconStyle={{
              borderTopWidth: 2,
              borderTopColor: "#ABA095",
            }}
            onSelect={(el) => this.setState({ page: el.props.name })}
          >
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
          </Tabs>
        </View>

        <View style={styles.container3}>
          <View style={styles.inputContainer}>
            {this.state.page == "second" && (
              <View>
                <MyInput disabled={true} value={email} name="mail" />
                <MyInput
                  changeText={(val) => {
                    this.onChangeText("newemail", val);
                  }}
                  placeholder="이메일 입력"
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
                  placeholder="현재 비밀번호 입력"
                  name="lock"
                />
                <MyInput
                  secure={true}
                  changeText={(val) => {
                    this.onChangeText("newpassword", val);
                  }}
                  placeholder="변경 비밀번호 입력"
                  name="lock"
                />

                <MyButton
                  onPress={() => this.passwordmodify()}
                  title="수정하기"
                ></MyButton>
              </View>
            )}
          </View> */}
        {/* </View> */}
      </View>
    );
  }
}
