import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import Loading from "../screens";
import { AuthNav } from "./AuthNav";
import { MainNav } from "./MainNav";

const Root = createSwitchNavigator(
  {
    Loading,
    AuthNav,

    MainNav
  },
  {
    initialRouteName: "Loading"
  }
);
// root에만 AppContainer 가 존재해야함
export const Tabs = createAppContainer(Root);
