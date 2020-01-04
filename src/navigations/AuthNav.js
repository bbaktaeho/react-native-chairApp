import { createSwitchNavigator } from "react-navigation";

import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

export default AuthNav = createSwitchNavigator(
  {
    Login,
    SignUp
  },
  {
    initialRouteName: "Login"
  }
);
