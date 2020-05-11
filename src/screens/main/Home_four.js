import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import MyHeader from "../../components/MyHeader";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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

export default class Home_four extends React.PureComponent {
  state = {
    list1: [
      {
        name: "앱 버전",
        rightT: "1.0.0",
      },
      {
        name: "앱 정보",
        divider: true,
      },
    ],
    list2: [
      {
        name: "의자소통 가이드",
      },
      {
        name: "문의하기",
        divider: true,
      },
    ],
  };
  render() {
    const { list1, list2 } = this.state;
    return (
      <View style={styles.container}>
        <MyHeader navigation={this.props.navigation} title="더보기"></MyHeader>

        <View style={{ flex: 1 }}>
          <Text style={styles.text}>어플리케이션</Text>
          {list1.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              bottomDivider={l.divider}
              rightTitle={l.rightT}
            />
          ))}

          <Text style={styles.text}>기타</Text>
          {list2.map((l, i) => (
            <ListItem key={i} title={l.name} bottomDivider={l.divider} />
          ))}
        </View>
      </View>
    );
  }
}
