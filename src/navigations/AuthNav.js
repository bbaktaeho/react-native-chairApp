import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

export const AuthNav = createSwitchNavigator(
  {
    Login,
    SignUp
  },
  {
    initialRouteName: "Login"
  }
);
