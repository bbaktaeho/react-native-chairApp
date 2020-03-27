import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  ScrollView
} from "react-native";
import { Input } from "react-native-elements";
import Tabs from "react-native-tabs";
import MyHeader from "../../components/MyHeader";
import AuthButton from "../../components/AuthButton";
import Fetch from "../../components/Fetch";
import URL from "../../NET";

export default class Privacy extends Component {
  state = {
    page: "first",
    email: "",
    name: "",
    password: "",
    newemail: "",
    newpassword: ""
  };

  requestInfo = async () => {
    const token = await AsyncStorage.getItem("token");

    if (token == null) {
      this.setState({ email: "비회원", name: "비회원" });
    } else {
      const res = await Fetch(URL.account, "POST", { token: token });

      if (res == "error") {
        console.log("fetch error");
      } else {
        this.setState({ email: res.user.email, name: res.user.name });
      }
    }
  };

  logout_removeItem = async () => {
    await AsyncStorage.removeItem("token");
    this.props.navigation.navigate("AuthNav");
  };

  emailmodify = async () => {
    const token = await AsyncStorage.getItem("token");
    const { newemail } = this.state;

    const res = await Fetch(URL.emailmodify, "PUT", {
      token: token,
      email: newemail
    });

    if (res == "error") {
      console.log("fetch error");
    } else {
      console.log(res.message);
      this.logout_removeItem();
    }
  };

  passwordmodify = async () => {
    const token = await AsyncStorage.getItem("token");
    const { password, newpassword } = this.state;

    const res = await Fetch(URL.passwordmodify, "PUT", {
      token: token,
      password: password,
      newPassword: newpassword
    });

    if (res == "error") {
      console.log("fetch error");
    } else {
      console.log(res.message);
      this.logout_removeItem();
    }
  };

  withdrawal = async () => {
    const token = await AsyncStorage.getItem("token");
    const { password } = this.state;

    const res = await Fetch(URL.withdrawal, "DELETE", {
      token: token,
      password: password
    });

    if (res == "error") {
      console.log("fetch error");
    } else {
      console.log(res.message);
      this.logout_removeItem();
    }
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  componentWillMount() {
    this.requestInfo();
  }

  render() {
    const { email, name } = this.state;
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
                borderTopColor: "#CEAEA7"
              }}
              onSelect={el => this.setState({ page: el.props.name })}
            >
              <Text name="first">내 정보</Text>
              <Text
                name="second"
                selectedIconStyle={{
                  borderTopWidth: 2,
                  borderTopColor: "#CEAEA7"
                }}
              >
                이메일 변경
              </Text>
              <Text
                name="third"
                selectedIconStyle={{
                  borderTopWidth: 2,
                  borderTopColor: "#CEAEA7"
                }}
              >
                비밀번호 변경
              </Text>
              <Text
                name="fourth"
                selectedIconStyle={{
                  borderTopWidth: 2,
                  borderTopColor: "#CEAEA7"
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
                    onChangeText={val => {
                      this.onChangeText("newemail", val);
                    }}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>변경 이메일ㅤㅤㅤ</Text>}
                  ></Input>

                  <AuthButton
                    onPress={() => this.emailmodify()}
                    title="수정하기"
                    backColor="#C8A480"
                  ></AuthButton>
                </View>
              )}
              {this.state.page == "third" && (
                <View>
                  <Input
                    onChangeText={val => {
                      this.onChangeText("password", val);
                    }}
                    secureTextEntry={true}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>현재 비밀번호ㅤㅤ</Text>}
                  ></Input>

                  <Input
                    onChangeText={val => {
                      this.onChangeText("newpassword", val);
                    }}
                    secureTextEntry={true}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>변경 비밀번호ㅤㅤㅤ</Text>}
                  ></Input>

                  <AuthButton
                    onPress={() => this.passwordmodify()}
                    title="수정하기"
                    backColor="#C8A480"
                  ></AuthButton>
                </View>
              )}
              {this.state.page == "fourth" && (
                <View>
                  <Text>
                    탈퇴한 회원 정보는 모두 삭제됩니다. 탈퇴하시겠습니까?
                  </Text>
                  <Input
                    onChangeText={val => {
                      this.onChangeText("password", val);
                    }}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>비밀번호ㅤㅤㅤ</Text>}
                  ></Input>
                  <AuthButton
                    onPress={() => this.withdrawal()}
                    title="탈퇴하기"
                    backColor="#C8A480"
                  ></AuthButton>
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
    flex: 1
  },
  container1: {
    flex: 1
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  container3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  header: {
    backgroundColor: "gainsboro",
    height: 240
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
    marginTop: 25
  },
  inputContainer: {
    width: "80%",
    marginTop: 20
  },
  textContainer: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 190,
    alignSelf: "center"
  }
});
