import { createStackNavigator } from "react-navigation";
import Sets from "../screens/settings";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../styles/styles";

export default SettingNav = createStackNavigator(
  {
    Index: {
      screen: Sets,
      navigationOptions: ({ navigation }) => ({
        headerTitle: (
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text style={{ fontSize: 16, color: "black" }}>설정</Text>
          </View>
        ),
        headerStyle: {
          backgroundColor: colors.header
        }
      })
    }
    // Vib: {},
    // Blue: {},
    // notify: {}
  },
  {
    initialRouteName: "Index"
  }
);
