import { createStackNavigator, createDrawerNavigator } from "react-navigation";

import Home from "../screens/main/Home";
import Detail from "../screens/main/Detail";

export const MainNav = createDrawerNavigator(
  {
    Home,
    Detail
  },
  {
    intialRouteName: "Home"
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

// export const MainNav = createStackNavigator({ Main });
