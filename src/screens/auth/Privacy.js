import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MyHeader from "../../components/MyHeader";

export default class Privacy extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader navigation={this.props.navigation} title="내 정보"></MyHeader>
        <View style={styles.container}>
          <Text style={{ textAlign: "center" }}>내 정보</Text>
        </View>
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
