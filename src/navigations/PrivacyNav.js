import { createStackNavigator } from "react-navigation";
import Home_three from "../screens/main/Home_three";
import Privacy from "../screens/auth/Privacy";

export default PrivacyNav = createStackNavigator(
  {
    Home_three: {
      screen: Home_three,
      navigationOptions: ({ navigation }) => ({
        header: () => {},
      }),
    },
    Privacy: {
      screen: Privacy,
      navigationOptions: ({ navigation }) => ({
        header: () => {},
        title: "개인 정보 수정",
      }),
    },
    // Withdrawal: {
    //   screen: Withdrawal,
    //   navigationOptions: ({ navigation }) => ({
    //     title: "회원 탈퇴",
    //   }),
    // },
  },
  {
    initialRouteName: "Home_three",
    headerLayoutPreset: "center",
  }
);
