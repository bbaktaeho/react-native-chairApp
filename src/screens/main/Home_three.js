import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  AsyncStorage,
  Switch,
} from "react-native";
import { Avatar, ListItem, Card, Divider } from "react-native-elements";
import Fetch from "../../components/Fetch";
import MyHeader from "../../components/MyHeader";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    borderRadius: 4,
    width: "95%",
  },
  avatar: {
    flex: 1.3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#695c4c",
    borderRadius: 10,
    margin: 5,
  },
  avatarText1: {
    fontSize: 30,
    color: "white",
  },
  avatarText2: {
    fontSize: 15,
    color: "white",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 22,
    marginBottom: 5,
    color: "silver",
  },
});

export default class Home_three extends React.PureComponent {
  state = {
    list1: [
      {
        name: "개인 정보 수정",
        chevron: true,
        press: () => {
          this.props.navigation.navigate("Privacy");
        },
      },
      {
        name: "회원 탈퇴",
        chevron: true,
      },
      {
        name: "로그아웃",
      },
    ],
    list2: [
      {
        name: "PUSH 알림",
        text: "실시간 자세에 대한 PUSH 알림 받기",
        right: () => <Switch></Switch>,
      },
      {
        name: "캐시 삭제",
      },
    ],
    email: "",
    name: "",
  };

  requestInfo = async () => {
    const token = await AsyncStorage.getItem("token");

    if (token == null) {
      this.setState({ name: "로그인 해주세요." });
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

  componentWillMount() {
    this.requestInfo();
  }

  render() {
    const { list1, list2, email, name } = this.state;
    return (
      <View style={styles.container}>
        <MyHeader navigation={this.props.navigation} title="내정보"></MyHeader>

        <View style={styles.avatar}>
          <Avatar
            size="large"
            rounded
            icon={{ name: "user", type: "antdesign" }}
            overlayContainerStyle={{
              backgroundColor: "#695c4c",
            }}
            containerStyle={{ borderColor: "white" }}
          />
          <Text style={styles.avatarText1}>{name} 님</Text>
          <Text style={styles.avatarText2}>( {email} )</Text>
        </View>

        <View style={{ flex: 4 }}>
          <Text style={styles.text}>계정</Text>
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

          {list1.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              chevron={l.chevron}
              onPress={l.press}
            />
          ))}

          <Text style={styles.text}>설정</Text>
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
          {list2.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              chevron={l.chevron}
              rightElement={l.right}
              subtitle={l.text}
              subtitleStyle={{ fontSize: 12, marginTop: 5 }}
            />
          ))}
        </View>
      </View>
    );
  }
}
