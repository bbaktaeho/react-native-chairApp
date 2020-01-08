import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import MyHeader from "../../components/MyHeader";

const Set = props => (
  <View>
    <MyHeader navigation={props.navigation} title="설정"></MyHeader>
    <View>
      <ScrollView>
        <Text></Text>
        <Text></Text>
      </ScrollView>
    </View>
  </View>
);

export default Set;
