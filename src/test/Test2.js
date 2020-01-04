import React from "react";
import { View, Text } from "react-native";
import MyHeader from "../components/MyHeader";

const Test2 = props => {
  return (
    <View>
      <MyHeader navigation={props.navigation} title="Test2"></MyHeader>
      <Text>This is Test2</Text>
    </View>
  );
};

export default Test2;
