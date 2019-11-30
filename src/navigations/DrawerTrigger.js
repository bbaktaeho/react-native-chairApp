import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

// withNavigation allows components to dispatch navigation actions
import { withNavigation, DrawerActions } from "react-navigation";

// DrawerActions is a specific type of navigation dispatcher
class DrawerTrigger extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.trigger}
        onPress={() => {
          this.props.navigation.dispatch(DrawerActions.openDrawer());
        }}
      >
        <Text>여기</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  trigger: {
    marginLeft: 27.5,
    borderRadius: 30,
    width: 60,
    height: 60
  }
});

export default withNavigation(DrawerTrigger);
