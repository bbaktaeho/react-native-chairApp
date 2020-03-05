import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  AsyncStorage
} from "react-native";
import { Card, Button } from "react-native-elements";
import Home_two from "../main/Home_two";
export default class First_pos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backData: [
        { id: 1, data: 0 },
        { id: 2, data: 0 },
        { id: 3, data: 0 },
        { id: 4, data: 0 }
      ],
      seatData: [
        { id: 1, data: 0 },
        { id: 2, data: 0 },
        { id: 3, data: 0 },
        { id: 4, data: 0 },
        { id: 5, data: 0 },
        { id: 6, data: 0 },
        { id: 7, data: 0 },
        { id: 8, data: 0 },
        { id: 9, data: 0 },
        { id: 10, data: 0 },
        { id: 11, data: 0 },
        { id: 12, data: 0 },
        { id: 13, data: 0 },
        { id: 14, data: 0 },
        { id: 15, data: 0 },
        { id: 16, data: 0 },
        { id: 17, data: 0 },
        { id: 18, data: 0 },
        { id: 19, data: 0 },
        { id: 20, data: 0 },
        { id: 21, data: 0 },
        { id: 22, data: 0 },
        { id: 23, data: 0 },
        { id: 24, data: 0 },
        { id: 25, data: 0 },
        { id: 26, data: 0 },
        { id: 27, data: 0 },
        { id: 28, data: 0 },
        { id: 29, data: 0 },
        { id: 30, data: 0 },
        { id: 31, data: 0 }
      ]
    };
  }

  map1(x) {
    return 255 - ((x - 0) * (255 - 0)) / (1000 - 0) + 0;
  }

  map2(x) {
    return 255 - ((x - 0) * (255 - 0)) / (400 - 0) + 0;
  }

  render() {
    return (
      <View>
        <Text>{}</Text>
        <Button
          title="자세 입력"
          backColor="#CEAEA7"
          onPress={() => this.props.navigation.navigate("MainNav")}
        ></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
