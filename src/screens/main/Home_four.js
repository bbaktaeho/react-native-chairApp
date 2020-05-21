import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem, Divider } from "react-native-elements";
import MyHeader from "../../components/MyHeader";
import Guide from "../guide/Guide";

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
          <Guide></Guide>;
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
          <Text style={styles.text}>어플리케이션</Text>
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
              rightTitle={l.rightT}
              chevron={l.chevron}
              onPress={l.press}
            />
          ))}

          <Text style={styles.text}>기타</Text>
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
              onPress={l.press}
            />
          ))}
        </View>
      </View>
    );
  }
}
