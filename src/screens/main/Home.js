import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container } from "native-base";
import MainHeader from "../../components/MainHeader";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <MainHeader openDrawer={this.props.navigation.openDrawer}></MainHeader>
        <View style={styles.container}>
          <Text>홈</Text>
        </View>
      </Container>
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
