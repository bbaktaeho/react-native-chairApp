import { createStackNavigator } from "react-navigation";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ResetPassword from "../screens/auth/ResetPassword";
export default AuthNav = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        header: () => {}
      })
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: ({ navigation }) => ({
        title: "회원가입"
      })
    },
    ResetPassword: {
      screen: ResetPassword,
      navigationOptions: ({ navigation }) => ({
        title: "비밀번호 변경"
      })
    }
  },
  {
    initialRouteName: "Login",
    headerLayoutPreset: "center"
  }
);
