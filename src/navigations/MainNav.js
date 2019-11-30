import React, { Component } from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { View, TouchableOpacity, Image } from "react-native";

import Home from "../screens/main/Home";
import Detail from "../screens/main/Detail";

class NavigationDrawerStructure extends Component {
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require("../assets/Images/menu.png")}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          ></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

// const Screen1_StackNavigator = createStackNavigator({
//   //All the screen from the Screen1 will be indexed here
//   First: {
//     screen: Home
//     // // navigationOptions: ({ navigation }) => ({
//     // //   title: "Demo Screen 1",
//     // //   headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//     // //   headerStyle: {
//     // //     backgroundColor: "#FF9800"
//     // //   },
//     // //   headerTintColor: "#fff"
//     // })
//   }
// });
// const Screen2_StackNavigator = createStackNavigator({
//   //All the screen from the Screen1 will be indexed here
//   Second: {
//     screen: Detail
//     // navigationOptions: ({ navigation }) => ({
//     //   title: "Demo Screen 2",
//     //   headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
//     //   headerStyle: {
//     //     backgroundColor: "#FF9800"
//     //   },
//     //   headerTintColor: "#fff"
//     // })
//   }
// });

export const MainNav = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerLabel: "홈"
      }
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        drawerLabel: "상세 정보"
      }
    }
  },
  {
    intialRouteName: "Home",
    hideStatusBar: false,
    drawerBackgroundColor: "rgba(255,255,255,.9)",
    overlayColor: "#6b52ae",
    contentOptions: {
      activeTintColor: "#fff",
      activeBackgroundColor: "#6b52ae"
    }
    // drawerWidth: 0.8 * innerWidth,
    // drawerPosition: "left",
    // contentOptions: {
    //   labelStyle: {
    //     height: 20
    //   }
    //   navigationOptions: {
    //     headerStyle: {
    //       backgroundColor: "#f4511e"
    //     },
    //     headerTintColor: "#fff",
    //     headerTitleStyle: {
    //       color: "white"
    //     }
    //   }
  }
);

// export default createAppContainer(MainNav);
