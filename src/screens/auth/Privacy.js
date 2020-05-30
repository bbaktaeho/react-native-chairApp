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
import { Avatar, ListItem } from "react-native-elements";
import Modal from "react-native-modalbox";

import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import MyDivider from "../../components/MyDivider";
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
    flexDirection: "row",
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: "center",
    backgroundColor: "#c2bab2",
  },
  avatarText: {
    fontSize: 23,
    marginLeft: 30,
    color: "white",
  },
  inputContainer: {
    width: "80%",
    marginTop: 50,
  },
  modal: {
    height: 380,
    width: 380,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,

    marginBottom: 5,
    color: "#ABA095",
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
    isDisabled: false,
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
          type="nav"
          title="회원 정보 수정"
          select="p"
        ></MyHeader>

        <View style={styles.avatar}>
          <Avatar
            size="medium"
            rounded
            icon={{ name: "user", type: "antdesign" }}
            overlayContainerStyle={{
              backgroundColor: "#d1cbc5",
            }} //695c4c
            containerStyle={{
              marginLeft: 20,
              borderWidth: 2,
              borderColor: "white",
            }}
          />
          <Text style={styles.avatarText}>{name}</Text>
        </View>

        <MyDivider title="회원 정보" left={15} />

        <ListItem title="이름" subtitle={name}></ListItem>
        <ListItem
          title="이메일"
          subtitle={email}
          onPress={() => this.refs.modal1.open()}
          chevron
        ></ListItem>
        <ListItem
          title="비밀번호"
          subtitle="********"
          onPress={() => this.refs.modal2.open()}
          chevron
        ></ListItem>

        <Modal
          style={[styles.modal]}
          ref={"modal1"}
          position={"center"}
          isDisabled={this.state.isDisabled}
        >
          <Text style={styles.text}>이메일 수정</Text>
          <View style={styles.inputContainer}>
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
        </Modal>

        <Modal
          style={[styles.modal]}
          ref={"modal2"}
          position={"center"}
          isDisabled={this.state.isDisabled}
        >
          <Text style={styles.text}>비밀번호 수정</Text>
          <View style={styles.inputContainer}>
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
              loading={privacyButton}
            ></MyButton>
          </View>
        </Modal>
      </View>
    );
  }
}
