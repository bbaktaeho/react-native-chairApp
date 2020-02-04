import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";

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
    {loading && <ActivityIndicator></ActivityIndicator>}
  </TouchableOpacity>
);

export default AuthButton;
