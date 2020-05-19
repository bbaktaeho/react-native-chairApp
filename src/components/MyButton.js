import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BarIndicator } from "react-native-indicators";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  authButton: {
    borderRadius: 120,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 45,
  },
});

const MyButton = ({
  title,
  onPress,
  backColor = "#ABA095",
  loading = false,
  isStat = false,
}) => (
  <View style={styles.container}>
    {!isStat && (
      <TouchableOpacity
        style={[styles.authButton, { backgroundColor: backColor }]}
        onPress={onPress}
      >
        {!loading && <Text style={{ color: "white" }}>{title}</Text>}
        {loading && (
          <BarIndicator color="rgb(255,255,255)" size={20}></BarIndicator>
        )}
      </TouchableOpacity>
    )}
    {isStat && (
      <TouchableOpacity
        style={{ backgroundColor: backColor }}
        onPress={onPress}
      >
        {!loading && <Text style={{ color: "white" }}>{title}</Text>}
      </TouchableOpacity>
    )}
  </View>
);

export default MyButton;
