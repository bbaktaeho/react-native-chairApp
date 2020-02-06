import { createStackNavigator } from "react-navigation";

import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
export default AuthNav = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    initialRouteName: "Login"
  }
);
