import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Divider } from "react-native-elements";
import MyHeader from "../../components/MyHeader";
import Guide from "../guide/Guide";
import MyDivider from "../../components/MyDivider";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
        chevron: true,
        press: () => {
          this.props.navigation.navigate("AppConfig");
        },
      },
    ],
    list2: [
      {
        name: "의자소통 가이드",
        chevron: true,
        press: () => {
          this.props.navigation.push("Guide");
        },
      },
      {
        name: "문의하기",
      },
    ],
  };
  render() {
    const { list1, list2 } = this.state;
    return (
      <View style={styles.container}>
        <MyHeader navigation={this.props.navigation} title="더보기"></MyHeader>

        <View style={{ flex: 1 }}>
          <MyDivider title="어플리케이션" left={15} />
          {list1.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              rightTitle={l.rightT}
              chevron={l.chevron}
              onPress={l.press}
            />
          ))}

          <MyDivider title="기타" left={15} />
          {list2.map((l, i) => (
            <ListItem
              key={i}
              title={l.name}
              chevron={l.chevron}
              onPress={l.press}
            />
          ))}
        </View>
      </View>
    );
  }
}
