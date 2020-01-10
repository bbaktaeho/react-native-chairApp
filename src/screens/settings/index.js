import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { Input,Icon, Button } from "react-native-elements";
import MyHeader from "../../components/MyHeader";


const Set = props => {
  console.log(props.navigation.navigate);
  
  return (
  <View>
    <MyHeader navigation={props.navigation} title="설정"></MyHeader>
    <View>
      <ScrollView>
      <Button
            onPress={() => props.navigation.navigate("Bluet")}
            title="블루투스 설정"
          ></Button>
          <Button
            onPress={() => props.navigation.navigate("Not")}
            title="진동 설정"
          ></Button>
          <Button
            onPress={() => props.navigation.navigate("Vib")}
            title="알림 설정"
          ></Button>
      </ScrollView>
    </View>
  </View>
  )
  };

export default Set;
