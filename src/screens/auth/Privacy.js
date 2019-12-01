import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MainHeader from "../../components/MainHeader";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class Privacy extends React.Component {
  render() {
    return (
      <React.Fragment>
        <MainHeader openDrawer={this.props.navigation.openDrawer}></MainHeader>
        <View style={styles.container}>
          <Text>개인정보</Text>
        </View>
      </React.Fragment>
    );
  }
}
