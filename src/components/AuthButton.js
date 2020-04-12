import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BarIndicator } from "react-native-indicators";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  authButton: {
    borderRadius: 120,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 45,
  },
});

const AuthButton = ({
  title,
  onPress,
  backColor = "gainsboro",
  loading = false,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={[styles.authButton, { backgroundColor: backColor }]}
      onPress={onPress}
    >
      {!loading && <Text style={{ color: "white" }}>{title}</Text>}
      {loading && (
        <BarIndicator color="rgb(255,255,255)" size={30}></BarIndicator>
      )}
    </TouchableOpacity>
  </View>
);

export default AuthButton;
