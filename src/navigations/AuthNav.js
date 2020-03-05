import { createStackNavigator } from "react-navigation";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";
import ResetPassword from "../screens/auth/ResetPassword";
import Guide from "../screens/guide/Guide";
import First_pos from "../screens/guide/First_pos";

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
    },
    Guide: {
      screen: Guide,
      navigationOptions: ({ navigation }) => ({
        header: () => {}
      })
    },
    First_pos: {
      screen: First_pos,
      navigationOptions: ({ navigation }) => ({
        header: () => {}
      })
    }
  },
  {
    initialRouteName: "Login",
    headerLayoutPreset: "center"
  }
);
