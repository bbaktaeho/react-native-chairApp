import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import MyHeader from "../../components/MyHeader";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  avatar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
  },
  avatarText: {
    fontSize: 30,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 5,
    color: "silver",
  },
});

export default class Home_three extends React.PureComponent {
  state = {
    list1: [
      {
        name: "개인 정보 수정",
      },
      {
        name: "회원 탈퇴",
      },
      {
        name: "로그아웃",
      },
    ],
    list2: [
      {
        name: "알림 설정",
      },
      {
        name: "캐시 삭제",
      },
    ],
    name: "김희연",
  };

  render() {
    const { list1, list2, name } = this.state;
    return (
      <View style={styles.container}>
        <MyHeader navigation={this.props.navigation} title="내정보"></MyHeader>

        <View style={styles.avatar}>
          <Avatar
            size="large"
            rounded
            icon={{ name: "user", type: "antdesign" }}
            overlayContainerStyle={{ backgroundColor: "#695c4c" }}
          />
          <Text style={styles.avatarText}>{name}</Text>
          <Text>( wow9896@naver.com )</Text>
        </View>

        <View style={{ flex: 4 }}>
          <Text style={styles.text}>계정</Text>
          {list1.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              // rightElement={l.right}
              // containerStyle={{ marginTop: 5 }}
              bottomDivider={true}
            />
          ))}

          <Text style={styles.text}>설정</Text>
          {list2.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              // rightElement={l.right}
              // containerStyle={{ marginTop: 5 }}
              bottomDivider={true}
            />
          ))}
        </View>
      </View>
    );
  }
}
