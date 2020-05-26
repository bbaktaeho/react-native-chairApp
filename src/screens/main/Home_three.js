import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Switch,
  Alert,
  ToastAndroid,
  ScrollView,
} from "react-native";
import { Avatar, ListItem, Slider } from "react-native-elements";
import Fetch from "../../components/Fetch";
import MyHeader from "../../components/MyHeader";
import MyDivider from "../../components/MyDivider";

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
    paddingTop: 21,
    paddingBottom: 21,
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
        right: () => (
          <Switch
            value={this.state.pus}
            onValueChange={this.pusChange}
          ></Switch>
        ),
      },
    ],
    email: "",
    name: "",
    pus: true,
    slid: true,
    num: 60,
  };

  pusChange = async () => {
    if (this.state.pus == false) {
      this.setState({ pus: true });
      this.setState({ slid: true });
      await AsyncStorage.setItem("push", "on");
    } else {
      this.setState({ pus: false });
      this.setState({ slid: false });
      await AsyncStorage.setItem("push", "off");
    }
  };

  pusInfo = async () => {
    const pushi = await AsyncStorage.getItem("push");
    const pusht = await AsyncStorage.getItem("time");
    if (pushi == null) {
      await AsyncStorage.setItem("push", "on");
      await AsyncStorage.setItem("time", "60");
    } else if (pushi == "on") {
      this.setState({ pus: true });
      this.setState({ slid: true });
      this.setState({ num: parseInt(pusht) });
    } else {
      this.setState({ pus: false });
      this.setState({ slid: false });
      this.setState({ num: parseInt(pusht) });
    }
  };

  slideComp = async () => {
    const pushi = this.state.num.toString();
    await AsyncStorage.setItem("time", pushi);
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
    this.pusInfo();
  }

  render() {
    const { list1, list2, name, pus } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <MyHeader
            navigation={this.props.navigation}
            title="내정보"
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
            <MyDivider title="계정" left={15} />

            {list1.map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                chevron={l.chevron}
                onPress={l.press}
              />
            ))}

            <MyDivider title="설정" left={15} />
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

            {this.state.slid ? (
              <View
                style={{
                  alignItems: "stretch",
                  justifyContent: "center",
                  margin: 20,
                }}
              >
                <Slider
                  minimumValue={60}
                  minimumTrackTintColor="#98e3fa"
                  maximumValue={600}
                  step={10}
                  thumbTintColor="#bfe8f5"
                  value={this.state.num}
                  onValueChange={(num) => this.setState({ num })}
                  onSlidingComplete={this.slideComp}
                />
                <Text style={{ justifyContent: "center" }}>
                  {parseInt(this.state.num)}초 마다
                </Text>
              </View>
            ) : null}
            <ListItem title={"캐시 삭제"}></ListItem>
          </View>
        </View>
      </ScrollView>
    );
  }
}
