import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Divider } from "react-native-elements";

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 22,
    marginLeft: 15,
    marginBottom: 5,
    color: "#ABA095",
  },
});

const MyDivider = ({ title, left }) => (
  <View>
    <Text style={[styles.text, { marginLeft: left }]}>{title}</Text>
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Divider
        style={{
          width: 380,
          height: 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ABA095",
        }}
      ></Divider>
    </View>
  </View>
);

export default MyDivider;
