import { View } from "react-native";
import { Input, Icon } from "react-native-elements";
import React from "react";

const MyInput = ({
  disabled = false,
  secure = false,
  value,
  label,
  placeholder,
  changeText,
  radius = 10,
  name,
}) => {
  return (
    <View style={{ marginTop: 5 }}>
      <Input
        disabled={disabled}
        secureTextEntry={secure}
        value={value}
        label={label}
        placeholder={placeholder}
        onChangeText={changeText}
        containerStyle={{ paddingBottom: 13 }}
        inputContainerStyle={{
          borderBottomWidth: 0,
          backgroundColor: "#F2F2F2",
          borderRadius: radius,
        }}
        inputStyle={{ color: "gray", fontSize: 16 }}
        labelStyle={{ fontSize: 13, marginBottom: 4, color: "#ABA095" }}
        leftIcon={<Icon name={name} color="#DECEBC" />}
      ></Input>
    </View>
  );
};

export default MyInput;
