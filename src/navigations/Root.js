import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Loading from "../screens/loding";
import MainNav from "./MainNav";
import AuthNav from "./AuthNav";
import AuthLoading from "../screens/auth/AuthLoading";

const Root = createSwitchNavigator(
  {
    Loading,
    AuthLoading,
    AuthNav,
    MainNav
  },
  {
    initialRouteName: "Loading"
  }
);
// root에만 AppContainer 가 존재해야함
export const RootNav = createAppContainer(Root);
