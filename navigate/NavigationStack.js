import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";

const screens = {
  Onboarding: {
    screen: OnboardingScreen,
  },
  Login: {
    screen: LoginScreen,
  },
  
};

const NavigationStack = createStackNavigator(screens);

export default createAppContainer(NavigationStack);
