import { View } from "react-native";
import { Input, Icon } from "react-native-elements";
import React from "react";

const MyInput = ({ value, placeholder, changeText, radius = 10, name }) => {
  return (
    <View>
      <Input
        value={value}
        placeholder={placeholder}
        onChangeText={changeText}
        containerStyle={{ paddingBottom: 13 }}
        inputContainerStyle={{
          borderBottomWidth: 0,
          backgroundColor: "#F2F2F2",
          borderRadius: radius,
        }}
        inputStyle={{ color: "gray", fontSize: 16 }}
        leftIcon={<Icon name={name} color="#DECEBC" />}
      ></Input>
    </View>
  );
};

export default MyInput;
