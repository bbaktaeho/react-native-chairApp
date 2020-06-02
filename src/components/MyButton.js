import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BarIndicator } from "react-native-indicators";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  myButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 45,
  },
});

const MyButton = ({
  title,
  onPress,
  backColor = "#ABA095",
  radius = 120,
  width = "90%",
  loading = false,
  isStat = false,
}) => (
  <View style={styles.container}>
    {!isStat && (
      <TouchableOpacity
        style={[
          styles.myButton,
          { backgroundColor: backColor, borderRadius: radius, width: width },
        ]}
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
        style={{ backgroundColor: backColor, borderRadius: radius }}
        onPress={onPress}
      >
        {!loading && <Text style={{ color: "white" }}>{title}</Text>}
      </TouchableOpacity>
    )}
  </View>
);

export default MyButton;
