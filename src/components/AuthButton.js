import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { BarIndicator } from "react-native-indicators";

const styles = StyleSheet.create({
  authButton: {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 45
  }
});

const AuthButton = ({
  title,
  onPress,
  backColor = "gainsboro",
  loading = false
}) => (
  <TouchableOpacity
    style={[styles.authButton, { backgroundColor: backColor }]}
    onPress={onPress}
  >
    {!loading && (
      <Text style={{ color: "black", fontWeight: "bold" }}>{title}</Text>
    )}
    {loading && (
      <BarIndicator color="rgb(255,255,255)" size={30}></BarIndicator>
    )}
  </TouchableOpacity>
);

export default AuthButton;
