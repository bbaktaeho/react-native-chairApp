import React from "react";
import { View, StyleSheet } from "react-native";

// pull in from DrawerTrigger.js
import DrawerTrigger from "./DrawerTrigger";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <DrawerTrigger />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    backgroundColor: "whitesmoke"
  }
});

export default Header;
