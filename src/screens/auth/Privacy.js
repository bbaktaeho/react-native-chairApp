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
import URL from "../../NET";

export default class Privacy extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "first", email: "", name: "", password: "" };
  }

  async componentWillMount() {
    this.state.email = await AsyncStorage.getItem("user_email");
    this.state.name = await AsyncStorage.getItem("user_name");
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    // const { email, name, password, page } = this.state;

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
              <Text style={styles.textContainer}>이름</Text>
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
                    onChangeText={val => {
                      this.onChangeText("email", val);
                    }}
                    value={this.state.email}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>이메일ㅤㅤ</Text>}
                  ></Input>

                  <Input
                    onChangeText={val => {
                      this.onChangeText("name", val);
                    }}
                    value={this.state.email}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>이름ㅤㅤㅤ</Text>}
                  ></Input>

                  <Input
                    onChangeText={val => {
                      this.onChangeText("password", val);
                    }}
                    secureTextEntry={true}
                    value={this.state.email}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>비밀번호ㅤ</Text>}
                  >
                    <Text>123456789</Text>
                  </Input>
                </View>
              )}
              {this.state.page == "second" && (
                <View>
                  <Input
                    onChangeText={val => {
                      this.onChangeText("email", val);
                    }}
                    value={this.state.email}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>현재 이메일ㅤㅤ</Text>}
                  ></Input>

                  <Input
                    onChangeText={val => {
                      this.onChangeText("name", val);
                    }}
                    value={this.state.email}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>변경 이메일ㅤㅤㅤ</Text>}
                  ></Input>

                  <AuthButton
                    onPress={() => this.props.navigation.navigate("AuthNav")}
                    title="수정하기"
                    backColor="#C8A480"
                  ></AuthButton>
                </View>
              )}
              {this.state.page == "third" && (
                <View>
                  <Input
                    onChangeText={val => {
                      this.onChangeText("email", val);
                    }}
                    value={this.state.email}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>현재 비밀번호ㅤㅤ</Text>}
                  ></Input>

                  <Input
                    onChangeText={val => {
                      this.onChangeText("name", val);
                    }}
                    value={this.state.email}
                    containerStyle={{ paddingBottom: 13 }}
                    leftIcon={<Text>변경 비밀번호ㅤㅤㅤ</Text>}
                  ></Input>

                  <AuthButton
                    onPress={() => this.props.navigation.navigate("AuthNav")}
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
                  <AuthButton
                    onPress={() => this.props.navigation.navigate("AuthNav")}
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
    height: 210
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
  body: {
    marginTop: 40
  },
  imageContainer: {
    marginTop: 20
  },
  inputContainer: {
    width: "80%",
    marginTop: 20
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "38%",
    height: 45,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: "#C8A480"
  },
  textContainer: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 170,
    alignSelf: "center"
  }
});
