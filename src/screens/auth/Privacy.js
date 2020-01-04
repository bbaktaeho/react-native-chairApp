import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MainHeader from "../../components/MainHeader";

export default class Privacy extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>개인 정보</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
