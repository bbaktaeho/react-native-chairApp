import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Switch,
  Alert,
  ToastAndroid,
} from "react-native";
import { Avatar, ListItem, Divider } from "react-native-elements";
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
  text: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 22,
    marginBottom: 5,
    color: "silver",
  },
});

export default class Home_three extends Component {
  logout_removeItem = async () => {
    await AsyncStorage.removeItem("token");
    this.props.navigation.navigate("AuthNav");
    ToastAndroid.show("로그아웃 되었습니다.", ToastAndroid.LONG);
  };

  state = {
    list1: [
      {
        name: "회원 정보 수정",
        chevron: true,
        press: () => {
          this.props.navigation.navigate("Privacy");
        },
      },
      {
        name: "회원 탈퇴",
        chevron: true,
        press: () => {
          this.props.navigation.navigate("Withdrawal");
        },
      },
      {
        name: "로그아웃",
        press: () => {
          Alert.alert(
            "의자소통 로그아웃",
            "로그아웃하시겠습니까?",
            [
              { text: "취소", style: "cancel" },
              {
                text: "로그아웃",
                onPress: () => this.logout_removeItem(),
              },
            ],
            {
              cancelable: false,
            }
          );
        },
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
    const { list1, list2, name } = this.state;
    return (
      <View style={styles.container}>
        <MyHeader navigation={this.props.navigation} title="내정보"></MyHeader>

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
