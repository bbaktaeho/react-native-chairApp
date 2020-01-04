import React from "react";
import { View, Text } from "react-native";
import MyHeader from "../components/MyHeader";

const Test1 = props => {
  return (
    <View>
      <MyHeader navigation={props.navigation} title="Test1"></MyHeader>
      <Text>This is Test1</Text>
    </View>
  );
};

export default Test1;
