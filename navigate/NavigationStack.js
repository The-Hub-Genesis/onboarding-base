import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";

import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import LandingScreen from "../screens/LandingScreen";

const NavigationStack = createStackNavigator({
  Landing: LandingScreen,
  Login: LoginScreen,
  Signup: SignupScreen,
  Onboarding: OnboardingScreen,
});

export default createAppContainer(NavigationStack);

// const screens = {
//   Landing: {
//     screen: LandingScreen,
//   },
//   Login: {
//     screen: LoginScreen,
//   },
//   Signup: {
//     screen: SignupScreen,
//   },
//   Onboarding: {
//     screen: OnboardingScreen,
//   },
// };

// const NavigationStack = createStackNavigator(screens);

// export default createAppContainer(NavigationStack);
