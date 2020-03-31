import React from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-elements";

const styles = StyleSheet.create({
  c: {
    borderRadius: 15,
    width: "95%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  title: {}
});

const DivCard = ({ title = "copyright by taeho^^", Component = <View /> }) => {
  return <Card containerStyle={styles.c} title={title}></Card>;
};

export default DivCard;
