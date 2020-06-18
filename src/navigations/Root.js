import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Loading from "../screens/loding";
import MainNav from "./MainNav";
import AuthNav from "./AuthNav";
import PrivacyNav from "./PrivacyNav";
import MoreNav from "./MoreNav";
import AuthLoading from "../screens/auth/AuthLoading";

const Root = createSwitchNavigator(
  {
    Loading,
    AuthNav,
    MainNav,
    PrivacyNav,
    MoreNav,
    AuthLoading: { screen: AuthLoading },
  },
  {
    initialRouteName: "Loading",
  }
);
// root에만 AppContainer 가 존재해야함
export const RootNav = createAppContainer(Root);
