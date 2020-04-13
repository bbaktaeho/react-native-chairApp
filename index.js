/** @format */
import { AppRegistry, YellowBox } from "react-native";
import Start from "./src/Start";
import { name as appName } from "./app.json";

YellowBox.ignoreWarnings(["Require cycle:"]);

AppRegistry.registerComponent(appName, () => Start);
